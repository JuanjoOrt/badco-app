import useAsyncStorage from './useAsyncStorage'
import { getUserLoginInfo, postNewUser, postUserLogin } from '../_services/authService'
import { useDispatch } from 'react-redux'
import { setSessionData, setSessionLoading, setSessionError } from '../_rx/user/userSlice'
import { setViewStatus } from '../_rx/login/loginSlice'
import { VIEW_LOGIN_HOME } from '../constants'

export default function useAuth () {
  const dispatch = useDispatch()
  const { setItem, getItem, removeItem } = useAsyncStorage()

  const checkSessionAvailable = async () => {
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

  const loginUser = async ({ userMail, password }) => {
    postUserLogin({ userMail, password })
      .then(async response => {
        dispatch(setSessionData(response))
        await setItem('@token', response.authToken)
      })
  }

  const createUser = async ({ userMail, password, name }) => {
    await postNewUser({ userMail, password, name })
      .then(async response => {
        dispatch(setSessionData(response))
        await setItem('@token', response.authToken)
      })
  }

  const logOutUser = async () => {
    await removeItem('@token')
    dispatch(setSessionData(null))
    dispatch(setViewStatus(VIEW_LOGIN_HOME))
  }

  return { checkSessionAvailable, loginUser, logOutUser, createUser }
}
