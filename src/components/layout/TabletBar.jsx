import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setTabletSidebar } from '../../_rx/user/userSlice'
import theme from '../../../theme'

export default function TabletBar () {
  const visible = useSelector(state => state.user.tabletSidebar)
  const dispatch = useDispatch()
  const animationSidebar = useRef(new Animated.Value(-400)).current
  const stylesBackground = [styles.background, visible ? styles.flex : styles.none]
  const stylesSideBar = [styles.sidebar, { left: animationSidebar }]

  const handleCloseSidebar = () => dispatch(setTabletSidebar(false))

  useEffect(() => {
    if (visible) {
      Keyboard.dismiss()
      Animated.timing(animationSidebar, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animationSidebar, {
        toValue: -400,
        duration: 200,
        useNativeDriver: false
      }).start()
    }
  }, [visible])

  return (
    <>
      <TouchableWithoutFeedback onPress={handleCloseSidebar}>
        <View style={stylesBackground} />
      </TouchableWithoutFeedback>
      <Animated.View style={stylesSideBar} />
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    position: 'absolute',
    zIndex: 100,
    top: theme.dimensions.statusBarHeight,
    left: 0,
    width: 1000000000000,
    height: theme.dimensions.screenHeightWithOutStatusBar
  },
  none: { display: 'none' },
  flex: { display: 'flex' },
  sidebar: {
    backgroundColor: '#f8f8f7',
    position: 'absolute',
    zIndex: 110,
    top: 0,
    left: 0,
    height: theme.dimensions.screenHeight,
    width: 400,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  visible: { left: 0 },
  noVisible: { left: -400 }
})
