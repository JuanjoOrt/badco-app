import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Login from './screens/login/login'
import Home from './screens/home/home'
import useAuth from './hooks/useAuth'
const Stack = createNativeStackNavigator()

export default function Main () {
  const { imLogged } = useAuth()

  useEffect(() => {
    imLogged()
  }, [])

  return (
    <NavigationContainer >
      <StatusBar style='light' />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
