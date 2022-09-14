import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: {
    data: null,
    error: null,
    isLoading: false
  }
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products.data = action.payload
    },
    setProductsError: (state, action) => {
      state.products.error = action.payload
    },
    setProductsIsLoading: (state, action) => {
      state.products.isLoading = action.payload
    }
  }
})

export const { setProductsData, setProductsError, setProductsIsLoading } = shopSlice.actions

export default shopSlice.reducer
