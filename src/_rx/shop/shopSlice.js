import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: {
    data: null,
    error: null,
    isLoading: false
  },
  shoppingCart: []
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
    },
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload
    }
  }
})

export const { setProductsData, setProductsError, setProductsIsLoading, setShoppingCart } = shopSlice.actions

export default shopSlice.reducer
