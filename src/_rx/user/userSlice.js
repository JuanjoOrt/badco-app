import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionInfo: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSessionInfo: (state, action) => {
      state.sessionInfo = action.payload
    }
  }
})

export const { setSessionInfo } = userSlice.actions

export default userSlice.reducer
