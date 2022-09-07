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

export default function Layout ({ children, style, appBarStyle = 'auto', onPressScreen }) {
  const dispatch = useDispatch()
  const isInputSearchOpen = useSelector(state => state.user.isInputSearchOpen)

  const handleOnPress = () => {
    if (isInputSearchOpen) dispatch(setInputSearchOpen(false))
    onPressScreen && onPressScreen()
  }

  return (
    <DismissKeyboard onPress={handleOnPress}>
      <View style={styles.container }>
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
    height: theme.dimensions.screenHeight
  },
  body: {
    width: '100%',
    height: theme.dimensions.screenHeight - theme.dimensions.headerHeight - (IS_MOBILE ? theme.dimensions.footerHeight : 0)
  }
})
