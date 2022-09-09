import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header from './Header'
import theme from '../../../theme'
import Footer from './Footer'
import { IS_MOBILE } from '../../constants'
import TabletBar from './TabletBar'

export default function Layout ({ children, style, appBarStyle = 'auto' }) {
  return (
      <View style={styles.container }>
        <TabletBar />
        <StatusBar style={appBarStyle} />
        <View style={[styles.content, style]}>
          <Header />
          <View style={styles.body}>
            {children}
          </View>
          {IS_MOBILE && <Footer />}
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
    height: theme.dimensions.screenHeightWithOutStatusBar
  },
  body: {
    width: '100%',
    height: theme.dimensions.screenHeightWithOutStatusBar - theme.dimensions.headerHeight - (IS_MOBILE ? theme.dimensions.footerHeight : 0)
  }
})
