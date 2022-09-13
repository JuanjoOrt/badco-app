import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import LayoutContent from '../../components/layout/LayoutContent'
import Layout from '../../components/layout/Layout'

export default function CommunicationDetail () {
  const route = useRoute()
  const communication = route.params.data

  return (
    <Layout>
      <LayoutContent>
        <Text style={styles.title}>{communication.title}</Text>
        <Text style={styles.description}>{communication.description}</Text>
        <Text style={styles.description}>{communication.description}</Text>
        <Text style={styles.description}>{communication.description}</Text>
      </LayoutContent>
    </Layout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50
  },
  description: {
    fontSize: 20,
    marginTop: 10
  }
})
