import { setSessionData, setSessionError, setSessionLoading } from '../user/userSlice'
import { getUserLoginInfo, postNewUser, postUserLogin } from '../../_services/authService'
import { getItem, removeItem, setItem } from '../../utils/asyncStorage'
import { setViewStatus } from './loginSlice'
import { VIEW_LOGIN_HOME } from '../../constants'

export const checkSessionAvailable = async (dispatch) => {
  const userToken = await getItem('@token')
  if (!userToken) return false
  dispatch(setSessionLoading(true))

  getUserLoginInfo({ token: userToken })
    .then(async response => {
      dispatch(setSessionData(response))
      return response
    })
    .catch(async (error) => {
      await removeItem('@token')
      dispatch(setSessionError(error))
      console.warn(error)
    })
    .finally(() => dispatch(setSessionLoading(false)))
}

export const loginUser = async (dispatch, { userMail, password }) => {
  return postUserLogin({ userMail, password })
    .then(async response => {
      dispatch(setSessionData(response))
      await setItem('@token', response.authToken)
    })
}

export const createUser = async (dispatch, { userMail, password, name }) => {
  return postNewUser({ userMail, password, name })
    .then(async response => {
      dispatch(setSessionData(response))
      await setItem('@token', response.authToken)
    })
}

export const logOutUser = async (dispatch) => {
  await removeItem('@token')
  dispatch(setSessionData(null))
  dispatch(setViewStatus(VIEW_LOGIN_HOME))
}
