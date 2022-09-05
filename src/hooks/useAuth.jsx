import useAsyncStorage from './useAsyncStorage'
import { getUserLoginInfo } from '../_services/authService'
import { useDispatch } from 'react-redux'
import { setSessionInfo } from '../_rx/user/userSlice'

export default function useAuth () {
  const dispatch = useDispatch()
  const { getItem, removeItem } = useAsyncStorage()

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

  return { checkSessionAvailable }
}
