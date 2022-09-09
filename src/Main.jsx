import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginHome from './screens/login/loginHome'
import Home from './screens/home/home'
import Shop from './screens/shop/shop'
import History from './screens/history/history'
import ShoppingCart from './screens/shoppingCart/shoppingCart'
import { useDispatch, useSelector } from 'react-redux'
import EmptyComponent from './components/EmptyComponent'
import { checkSessionAvailable } from './_rx/login/loginActions'
import { VIEW_HOME, VIEW_HISTORY, VIEW_SHOP, VIEW_SHOPPING_CART } from './constants'
const Stack = createNativeStackNavigator()

export default function Main () {
  const dispatch = useDispatch()
  const sessionInfo = useSelector(({ user }) => user.sessionInfo)

  useEffect(() => {
    dispatch(checkSessionAvailable)
  }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName={sessionInfo.data ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false,
          animation: 'none',
          gestureEnabled: true
        }}>
        {sessionInfo.isLoading &&
          <Stack.Screen name="Loading" component={EmptyComponent} />
        }
        { !sessionInfo.data && !sessionInfo.isLoading &&
          <Stack.Screen name="Login" component={LoginHome} />
        }
        { sessionInfo.data && !sessionInfo.isLoading &&
          <>
            <Stack.Screen name={VIEW_HOME} component={Home} />
            <Stack.Screen name={VIEW_SHOP} component={Shop} />
            <Stack.Screen name={VIEW_HISTORY} component={History} />
            <Stack.Screen name={VIEW_SHOPPING_CART} component={ShoppingCart} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
