import fetcher from './fetcher'
import { API_AUTH_ME, API_AUTH_LOGIN, API_AUTH_SIGNUP } from './constants'

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

export const postNewUser = async ({ userMail, password, name }) => {
  return await fetcher({
    method: 'POST',
    url: `${API_AUTH_SIGNUP}?email=${userMail}&password=${password}&name=${name}`
  })
}
