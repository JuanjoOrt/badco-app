import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import theme from '../../../theme'
import { Feather, MaterialCommunityIcons } from 'react-native-vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { VIEW_HOME, VIEW_HISTORY, VIEW_SHOP, VIEW_SHOPPING_CART } from '../../constants'

export default function Footer () {
  const route = useRoute()
  const navegation = useNavigation()

  const handleRouteNavigation = (route) => navegation.navigate(route)

  return (
    <View style={styles.footer}>
      <TouchableWithoutFeedback style={styles.menuOption} onPress={() => handleRouteNavigation(VIEW_HOME)}>
        <View style={styles.menuOption}>
          <Feather name='home' size={30} />
          <View style={[styles.option, route.name === VIEW_HOME && styles.borderActive]}/>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.menuOption} onPress={() => handleRouteNavigation(VIEW_SHOP)}>
        <View style={styles.menuOption}>
          <MaterialCommunityIcons name='tshirt-crew-outline' size={35} />
          <View style={[styles.option, route.name === VIEW_SHOP && styles.borderActive]}/>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.menuOption} onPress={() => handleRouteNavigation(VIEW_HISTORY)}>
        <View style={styles.menuOption}>
          <Feather name='list' size={33} />
          <View style={[styles.option, route.name === VIEW_HISTORY && styles.borderActive]}/>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.menuOption} onPress={() => handleRouteNavigation(VIEW_SHOPPING_CART)}>
        <View style={styles.menuOption}>
          <Feather name='shopping-cart' size={30} />
          <View style={[styles.option, route.name === VIEW_SHOPPING_CART && styles.borderActive]}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: theme.dimensions.footerHeight,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eaeaea',
  },
  menuOption: {
    width: 50,
    height: theme.dimensions.footerHeight,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10
  },
  option: {
    marginBottom: 4,
    width: 50,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent'
  },
  borderActive: {
    borderBottomColor: '#2b8853'
  }
})
