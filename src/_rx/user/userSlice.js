import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionInfo: {
    data: null,
    isLoading: false,
    error: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSessionData: (state, action) => {
      state.sessionInfo.data = action.payload
    },
    setSessionLoading: (state, action) => {
      state.sessionInfo.isLoading = action.payload
    },
    setSessionError: (state, action) => {
      state.sessionInfo.error = action.payload
    }
  }
})

export const { setSessionData, setSessionLoading, setSessionError } = userSlice.actions

export default userSlice.reducer
