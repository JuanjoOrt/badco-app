import { setProductsData, setProductsError, setProductsIsLoading } from '../shop/shopSlice'
import { getProducts } from '../../_services/shopService'

export const fetchProducts = async (dispatch) => {
  dispatch(setProductsIsLoading(true))

  getProducts()
    .then(async response => {
      dispatch(setProductsData(response))
    })
    .catch(async (error) => {
      dispatch(setProductsError(error))
      console.warn(error)
    })
    .finally(() => dispatch(setProductsIsLoading(false)))
}
