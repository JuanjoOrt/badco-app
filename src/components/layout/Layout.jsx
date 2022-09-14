import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import theme from '../../../theme'
import { IS_MOBILE } from '../../constants'

export default function Layout ({ children, style }) {
  return (
      <SafeAreaView >
        <View style={[styles.content, style]}>
          <View style={styles.body}>
            {children}
          </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  body: {
    width: '100%',
    height: theme.dimensions.screenHeightWithOutStatusBar - (IS_MOBILE ? theme.dimensions.mobileDeviceBarsHeight : theme.dimensions.headerHeight)
  }
})
