import fetcher from './fetcher'
import { API_AUTH_ME } from './constants'

export const getUserLoginInfo = async ({ token }) => {
  return await fetcher({
    method: 'GET',
    url: API_AUTH_ME,
    auth: token
  })
}
