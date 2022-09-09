import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card ({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Text style={styles.description}>{ data.description }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9d9d9d',
    backgroundColor: '#ececec',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  header: {
    height: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  description: {
    fontSize: 16
  }
})
