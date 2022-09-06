import { createSlice } from '@reduxjs/toolkit'
import { VIEW_LOGIN_HOME } from '../../constants'

const initialState = {
  viewStatus: VIEW_LOGIN_HOME
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setViewStatus: (state, action) => {
      state.viewStatus = action.payload
    }
  }
})

export const { setViewStatus } = loginSlice.actions

export default loginSlice.reducer
