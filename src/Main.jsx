import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginHome from './screens/login/loginHome'
import HomeRoutes from './screens/home'
import ShopRoutes from './screens/shop'
import History from './screens/history/history'
import ShoppingCart from './screens/shoppingCart/shoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import EmptyComponent from './components/EmptyComponent'
import { checkSessionAvailable } from './_rx/login/loginActions'
import { VIEW_HISTORY, VIEW_SHOPPING_CART, VIEW_HOME_TAB, IS_MOBILE, VIEW_SHOP_TAB } from './constants'
import IconTab from './components/layout/IconTab'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import DrawerComponent from './components/layout/Drawer'
import Header from './components/layout/Header'
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const tabBarIcon = {
  [VIEW_HOME_TAB]: <IconTab icon={<Feather name='home' size={24} />} />,
  [VIEW_SHOP_TAB]: <IconTab icon={<MaterialCommunityIcons name='tshirt-crew-outline' size={26} />} />,
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
      { sessionInfo.data && !sessionInfo.isLoading && <>
        { IS_MOBILE
          ? <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: () => tabBarIcon[route.name],
                header: () => <Header />
              })}>
              <Tab.Screen name={VIEW_HOME_TAB} component={HomeRoutes} />
              <Tab.Screen name={VIEW_SHOP_TAB} component={ShopRoutes} />
              <Tab.Screen name={VIEW_HISTORY} component={History} />
              <Tab.Screen name={VIEW_SHOPPING_CART} component={ShoppingCart} />
            </Tab.Navigator>
          : <Drawer.Navigator
              screenOptions={{
                swipeEnabled: false,
                header: () => <Header />
              }}
              drawerContent={DrawerComponent}
              useLegacyImplementation initialRouteName={VIEW_HOME_TAB}
              >
              <Drawer.Screen name={VIEW_HOME_TAB} component={HomeRoutes} />
              <Drawer.Screen name={VIEW_SHOP_TAB} component={ShopRoutes} />
              <Drawer.Screen name={VIEW_HISTORY} component={History} />
              <Drawer.Screen name={VIEW_SHOPPING_CART} component={ShoppingCart} />
            </Drawer.Navigator>
        }
      </>
      }
    </NavigationContainer>
  )
}
