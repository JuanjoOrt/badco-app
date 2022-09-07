import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import loginReducer from './login/loginSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
