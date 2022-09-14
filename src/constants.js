import { Dimensions } from 'react-native'

export const VIEW_LOGIN_HOME = 'VIEW_LOGIN_HOME'
export const VIEW_LOGIN_LOGIN = 'VIEW_LOGIN_LOGIN'
export const VIEW_LOGIN_SIGNUP = 'VIEW_LOGIN_SIGNUP'

export const IS_TABLET = Dimensions.get('screen').width >= 500
export const IS_MOBILE = !IS_TABLET

export const VIEW_HOME_TAB = 'HomeTab'
export const VIEW_HOME = 'Home'
export const VIEW_HOME_COMMUNICATION_DETAIL = 'Home-communication-detail'

export const VIEW_SHOP_TAB = 'ShopTab'
export const VIEW_SHOP = 'Shop'
export const VIEW_SHOP_PRODUCT_DETAIL = 'Shop-product-detail'

export const VIEW_HISTORY = 'History'

export const VIEW_SHOPPING_CART = 'ShoppingCart'
