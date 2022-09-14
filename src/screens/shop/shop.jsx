import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Layout from '../../components/layout/Layout'
import LayoutContent from '../../components/layout/LayoutContent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../_rx/shop/shopAction'

export default function Home () {
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector(state => ({
    data: state.shop.products.data,
    isLoading: state.shop.products.isLoading,
    error: state.shop.products.isError
  }))

  useEffect(() => {
    dispatch(fetchProducts)
  }, [])

  return (
    <Layout>
      <LayoutContent>
        {isLoading && <Text>Loading...</Text>}
        {console.log(data)}
        <Text>Hola</Text>
      </LayoutContent>
    </Layout>
  )
}
