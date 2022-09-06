import fetcher from './fetcher'
import { API_AUTH_ME, API_AUTH_LOGIN } from './constants'

export const getUserLoginInfo = async ({ token }) => {
  return await fetcher({
    method: 'GET',
    url: API_AUTH_ME,
    auth: token
  })
}

export const postUserLogin = async ({ userMail, password }) => {
  return await fetcher({
    method: 'POST',
    url: `${API_AUTH_LOGIN}?email=${userMail}&password=${password}`
  })
}
