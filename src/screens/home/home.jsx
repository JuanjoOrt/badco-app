import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

export default function Home () {
  const { logOutUser } = useAuth()
  return (
    <View>
      <Text>
        Home
      </Text>
      <Button onPress={logOutUser}>Disconect</Button>
    </View>
  )
}
