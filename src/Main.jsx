import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import Login from './screens/login/login'
import Home from './screens/home/home'
import useAuth from './hooks/useAuth'
import { useSelector } from 'react-redux'
const Stack = createNativeStackNavigator()

export default function Main () {
  const { checkSessionAvailable } = useAuth()
  const userSessionInfo = useSelector(({ user }) => user.sessionInfo)

  useEffect(() => {
    checkSessionAvailable()
  }, [])

  return (
    <NavigationContainer >
      <StatusBar style='light' />
      <Stack.Navigator
        initialRouteName={userSessionInfo ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}>
        { !userSessionInfo
          ? <Stack.Screen name="Login" component={Login} />
          : <>
            <Stack.Screen name="Home" component={Home} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
