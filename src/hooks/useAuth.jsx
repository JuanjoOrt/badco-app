import useAsyncStorage from './useAsyncStorage'
import { getUserLoginInfo } from '../_services/authService'

export default function useAuth () {
  const { getItem } = useAsyncStorage()

  const imLogged = async () => {
    const userToken = await getItem('@token')
    // if (!userToken) return false

    const userInfo = await getUserLoginInfo({ token: 'asd' })
    console.log(userInfo)
  }

  return { imLogged }
}
