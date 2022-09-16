import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProductDetails } from '../../_services/shopService'
import LayoutContent from '../../components/layout/LayoutContent'
import Gallery from '../../components/Gallery'
import SizeCard from '../../components/SizeCard'
import Button from '../../components/Button'
import { setShoppingCart } from '../../_rx/shop/shopSlice'

export default function ShopDetails ({ route }) {
  const shoppingCart = useSelector(state => state.shop.shoppingCart)
  const dispatch = useDispatch()
  const productId = route.params.productId
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [sizeSelected, setSizeSelected] = useState()

  useEffect(() => {
    setLoading(true)
    getProductDetails(productId)
      .then(res => setData(res))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const handleSize = (size) => setSizeSelected(size)
  const handleAddShoppingCart = () => {
    const item = { id: data.id, price: data.price, size: sizeSelected, image: data.image, name: data.name }
    const itemFounded = shoppingCart.find(shoppingCartItem => shoppingCartItem.id === item.id && shoppingCartItem.size === item.size)
    if (itemFounded) {
      const countPlus = itemFounded.count + 1
      const newItem = { ...itemFounded, count: countPlus }
      const preparingBuy = shoppingCart.filter(shoppingCartItem => shoppingCartItem.size !== newItem.size && shoppingCartItem.id !== item.id )
      console.log(preparingBuy)
      /*const allItems = [...preparingBuy, newItem]
      console.log(allItems)
      dispatch(setShoppingCart(allItems))*/
    } else {
      item.count = 1
      dispatch(setShoppingCart([...shoppingCart, item]))
    }
  }

  return (
    <LayoutContent>
      {loading && <Text>Loading...</Text>}
      {data && (
        <View>
          <Gallery photos={data.imageGallery} />
          <View style={styles.content}>
            <Text style={styles.title}>{ data.name }</Text>
            <Text style={styles.description}>{ data.description }</Text>
          </View>
          <View style={styles.buyContainer}>
            <View style={styles.sizeContainer}>
              {data.sizes_avaliable.map(size =>
                <SizeCard key={size} onPress={handleSize} active={sizeSelected === size}>
                  {size}
                </SizeCard>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button color='primary' disabled={!sizeSelected} onPress={handleAddShoppingCart}>Añadir al carrito</Button>
            </View>
          </View>
        </View>
      )}
    </LayoutContent>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30
  },
  title: {
    fontSize: '24',
    fontWeight: 'bold',
    marginBottom: 20
  },
  description: {
    fontSize: 15
  },
  buyContainer: {
    marginTop: 40
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
