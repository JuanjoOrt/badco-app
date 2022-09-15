import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { getProductDetails } from '../../_services/shopService'
import LayoutContent from '../../components/layout/LayoutContent'
import Gallery from '../../components/Gallery'
import SizeCard from '../../components/SizeCard'
import Button from '../../components/Button'

export default function ShopDetails ({ route }) {
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
              <Button color='primary' disabled={!sizeSelected}>Añadir al carrito</Button>
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
