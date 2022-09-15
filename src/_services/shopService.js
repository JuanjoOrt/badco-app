import fetcher from './fetcher'
import { API_PRODUCTS_DETAILS, API_PRODUCTS_LIST } from './constants'

export const getProducts = async () => {
  return await fetcher({
    method: 'GET',
    url: `${API_PRODUCTS_LIST}`
  })
}

export const getProductDetails = async (id) => {
  return await fetcher({
    method: 'GET',
    url: `${API_PRODUCTS_DETAILS}/${id}`
  })
}
