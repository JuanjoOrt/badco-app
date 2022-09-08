import React from 'react'
import { Text } from 'react-native'
import Button from '../../components/Button'
import Layout from '../../components/layout/Layout'
import { useDispatch } from 'react-redux'
import { logOutUser } from '../../_rx/login/loginActions'

export default function Home () {
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(logOutUser)
  return (
      <Layout>
        <Text>
          Home
        </Text>
        <Button onPress={handleLogOut}>Disconect</Button>
      </Layout>
  )
}
