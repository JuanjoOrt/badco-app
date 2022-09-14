import { Text, View } from 'react-native'
import { useEffect } from 'react'

export default function ShopDetails ({ route }) {
  const productId = route.params.productId

  useEffect(() => {
    console.log(productId)
  }, [])

  return (
    <View>
      <Text>
        Detalles de un producto
      </Text>
    </View>
  )
}
