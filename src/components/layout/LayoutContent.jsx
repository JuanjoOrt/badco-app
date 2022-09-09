import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { IS_TABLET } from '../../constants'

export default function LayoutContent ({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        { children }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  content: {
    width: IS_TABLET ? 600 : '90%',
    marginVertical: 10
  }
})
