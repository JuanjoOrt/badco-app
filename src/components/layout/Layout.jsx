import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import theme from '../../../theme'
import { IS_MOBILE } from '../../constants'

export default function Layout ({ children, appBarStyle = 'auto', style }) {
  return (
        <View style={[style]}>
          <StatusBar style={appBarStyle} />
          <View style={styles.body}>
            {children}
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: theme.dimensions.screenHeightWithOutStatusBar - (IS_MOBILE ? theme.dimensions.mobileDeviceBarsHeight : theme.dimensions.headerHeight)
  }
})
