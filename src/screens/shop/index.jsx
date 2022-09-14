import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VIEW_SHOP, VIEW_SHOP_PRODUCT_DETAIL } from '../../constants'
import Shop from './shop'
import ShopDetails from './shopDetails'

const Stack = createNativeStackNavigator()
export default function HomeRoutes () {
  return (
    <Stack.Navigator
      initialRouteName={VIEW_SHOP}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={VIEW_SHOP} component={Shop} />
      <Stack.Screen name={VIEW_SHOP_PRODUCT_DETAIL} component={ShopDetails} />
    </Stack.Navigator>
  )
}
