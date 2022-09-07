import React from 'react'
import { Text } from 'react-native'
import Button from '../../components/Button'
import Layout from '../../components/layout/Layout'
import useAuth from '../../hooks/useAuth'

export default function Home () {
  const { logOutUser } = useAuth()
  return (
      <Layout>
        <Text>
          Home
        </Text>
        <Button onPress={logOutUser}>Disconect</Button>
      </Layout>
  )
}
