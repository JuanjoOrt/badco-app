import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginHome from './screens/login/loginHome'
import Home from './screens/home/home'
import useAuth from './hooks/useAuth'
import { useSelector } from 'react-redux'
import EmptyComponent from './components/EmptyComponent'
const Stack = createNativeStackNavigator()

export default function Main () {
  const { checkSessionAvailable } = useAuth()
  const sessionInfo = useSelector(({ user }) => user.sessionInfo)

  useEffect(() => {
    checkSessionAvailable()
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
            <Stack.Screen name="Home" component={Home} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
