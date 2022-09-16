import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Layout from '../../components/layout/Layout'
import { useSelector } from 'react-redux'
import LayoutContent from '../../components/layout/LayoutContent'

export default function Home () {
  const shoppingCart = useSelector(state => state.shop.shoppingCart)
  const isEmptyCart = shoppingCart.length === 0
  return (
    <Layout>
      <LayoutContent>
        { isEmptyCart
          ? <Text>El carrito está vacío</Text>
          : <View>
            {shoppingCart.map((shoppingItem, index) => (
              <View key={index} style={styles.container}>
                <Image source={{ uri: shoppingItem.image }} style={styles.image} resizeMode='contain'/>
                <View style={styles.description}>
                  <View>
                    <Text style={styles.title}>{shoppingItem.name}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text>Talla: {shoppingItem.size.toUpperCase()}</Text>
                    <Text>Cantidad: {shoppingItem.count}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        }
      </LayoutContent>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: '30%',
    height: '100%'
  },
  description: {
    width: '70%'
  },
  title: {
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
