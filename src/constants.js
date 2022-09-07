import { Dimensions } from 'react-native'

export const VIEW_LOGIN_HOME = 'VIEW_LOGIN_HOME'
export const VIEW_LOGIN_LOGIN = 'VIEW_LOGIN_LOGIN'
export const VIEW_LOGIN_SIGNUP = 'VIEW_LOGIN_SIGNUP'

export const IS_TABLET = Dimensions.get('screen').width >= 500
export const IS_MOBILE = !IS_TABLET
