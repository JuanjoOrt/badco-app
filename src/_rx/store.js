import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import loginReducer from './login/loginSlice'
import shopReducer from './shop/shopSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    shop: shopReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
