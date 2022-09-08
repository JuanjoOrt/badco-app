import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Header from './Header'
import theme from '../../../theme'
import Footer from './Footer'
import DismissKeyboard from '../DimissKeyboard'
import { useDispatch, useSelector } from 'react-redux'
import { setInputSearchOpen } from '../../_rx/user/userSlice'
import { IS_MOBILE } from '../../constants'
import TabletBar from './TabletBar'

export default function Layout ({ children, style, appBarStyle = 'auto', onPressScreen }) {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)

  const handleOnPress = () => {
    if (userInfo.isInputSearchOpen) dispatch(setInputSearchOpen(false))
    onPressScreen && onPressScreen()
  }

  return (
    <DismissKeyboard onPress={handleOnPress}>
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
    </DismissKeyboard>
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
