import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from './Header'
import theme from '../../../theme'

export default function Layout ({ children, style, appBarStyle = 'auto' }) {
  return (
      <SafeAreaView >
        <View style={[styles.content, style]}>
          <Header />
          <View style={styles.body}>
            {children}
          </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    height: theme.dimensions.screenHeightWithOutStatusBar
  },
  body: {
    width: '100%',
    height: theme.dimensions.screenHeightWithOutStatusBar - theme.dimensions.headerHeight
  }
})
