import React from 'react'
import Constants from 'expo-constants'
import { Dimensions, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function Layout ({ children, style, appBarStyle = 'auto' }) {
  return (
    <View style={styles.container }>
      <StatusBar style={appBarStyle} />
      <View style={[styles.content, style]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  content: {
    flex: 1,
    height: Dimensions.get('window').height - Constants.statusBarHeight
  }
})
