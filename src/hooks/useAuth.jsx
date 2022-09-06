import useAsyncStorage from './useAsyncStorage'
import { getUserLoginInfo, postUserLogin } from '../_services/authService'
import { useDispatch } from 'react-redux'
import { setSessionInfo } from '../_rx/user/userSlice'

export default function useAuth () {
  const dispatch = useDispatch()
  const { setItem, getItem, removeItem } = useAsyncStorage()

  const checkSessionAvailable = async () => {
    const userToken = await getItem('@token')
    if (!userToken) return false

    getUserLoginInfo({ token: userToken })
      .then(async response => {
        dispatch(setSessionInfo(response))
        return response
      })
      .catch(async (error) => {
        await removeItem('@token')
        console.warn(error)
      })
  }

  const loginUser = async ({ userMail, password }) => {
    postUserLogin({ userMail, password })
      .then(async response => {
        dispatch(setSessionInfo(response))
        await setItem('@token', response.authToken)
      })
  }

  return { checkSessionAvailable, loginUser }
}
