import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginHome from './screens/login/loginHome'
import HomeRoutes from './screens/home'
import Shop from './screens/shop/shop'
import History from './screens/history/history'
import ShoppingCart from './screens/shoppingCart/shoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import EmptyComponent from './components/EmptyComponent'
import { checkSessionAvailable } from './_rx/login/loginActions'
import { VIEW_HISTORY, VIEW_SHOP, VIEW_SHOPPING_CART, VIEW_HOME_TAB } from './constants'
import IconTab from './components/layout/IconTab'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const tabBarIcon = {
  [VIEW_HOME_TAB]: <IconTab icon={<Feather name='home' size={24} />} />,
  [VIEW_SHOP]: <IconTab icon={<MaterialCommunityIcons name='tshirt-crew-outline' size={26} />} />,
  [VIEW_HISTORY]: <IconTab icon={<Feather name='list' size={26} />} />,
  [VIEW_SHOPPING_CART]: <IconTab icon={<Feather name='shopping-cart' size={24} />} />
}

export default function Main () {
  const dispatch = useDispatch()
  const sessionInfo = useSelector(({ user }) => user.sessionInfo)

  useEffect(() => {
    dispatch(checkSessionAvailable)
  }, [])

  return (
    <NavigationContainer >
      { sessionInfo.isLoading && <EmptyComponent /> }
      { !sessionInfo.data && !sessionInfo.isLoading && <LoginHome /> }
      { sessionInfo.data && !sessionInfo.isLoading &&
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => tabBarIcon[route.name]
          })}>
          <Tab.Screen name={VIEW_HOME_TAB} component={HomeRoutes} />
          <Tab.Screen name={VIEW_SHOP} component={Shop} />
          <Tab.Screen name={VIEW_HISTORY} component={History} />
          <Tab.Screen name={VIEW_SHOPPING_CART} component={ShoppingCart} />
        </Tab.Navigator>
      }
    </NavigationContainer>
  )
}
