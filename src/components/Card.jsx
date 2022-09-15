import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { VIEW_HOME_COMMUNICATION_DETAIL } from '../constants'

export default function Card ({ data }) {
  const navigation = useNavigation()

  const handlePress = () => navigation.navigate(VIEW_HOME_COMMUNICATION_DETAIL, {data})

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <Text style={styles.description}>{ data.description }</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9d9d9d',
    backgroundColor: '#ffffff',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  header: {
    height: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    fontSize: 14
  }
})
