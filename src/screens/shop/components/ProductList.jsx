import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { VIEW_SHOP_PRODUCT_DETAIL } from '../../../constants'

export default function ProductList ({ product }) {
  const navigation = useNavigation()
  const handleOnPress = () => navigation.navigate(VIEW_SHOP_PRODUCT_DETAIL)
  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>Precio: {product.price} €</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    height: 200,
    flexDirection: 'row'
  },
  image: {
    width: 200,
    height: '100%'
  },
  textContainer: {
    paddingLeft: 20
  },
  name: {
    fontSize: 20
  },
  price: {
    fontSize: 18,
    paddingTop: 15,
    fontWeight: 'bold'
  }
})
