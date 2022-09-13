import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import theme from '../../../theme'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { VIEW_HISTORY, VIEW_HOME, VIEW_SHOP, VIEW_SHOPPING_CART } from '../../constants'

const DrawerItem = ({ icon, label, route }) => {
  const navigation = useNavigation()
  const handleOnPress = () => navigation.navigate(route)
  return (
    <View style={styles.drawerItem}>
      <TouchableWithoutFeedback style={styles.item} onPress={handleOnPress}>
        <View style={styles.item}>
          {icon}
          <Text style={styles.itemText}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default function Drawer () {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.logoText}>BAD CO.</Text>
      </View>
      <View style={styles.content}>
        <DrawerItem label='Comunicados' icon={<Feather name='home' size={24} />} route={VIEW_HOME}/>
        <DrawerItem label='Tienda' icon={<MaterialCommunityIcons name='tshirt-crew-outline' size={26} />} route={VIEW_SHOP}/>
        <DrawerItem label='Pedidos' icon={<Feather name='list' size={26} />} route={VIEW_HISTORY}/>
        <DrawerItem label='Carrito' icon={<Feather name='shopping-cart' size={24} />} route={VIEW_SHOPPING_CART}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.dimensions.headerHeight,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    paddingTop: 40
  },
  logoText: {
    fontFamily: theme.font.family.anton,
    fontSize: 30,
    color: '#6c60a8'
  },
  drawerItem: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: '10%'
  },
  item: {
    flexDirection: 'row'
  },
  itemText: {
    fontSize: 20,
    paddingLeft: 5
  }
})
