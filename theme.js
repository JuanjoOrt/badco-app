import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default {
  font: {
    family: {
      anton: 'anton-regular'
    }
  },
  color: {
    primary: '#8379C7FF',
    disabledPrimary: '#aaa4cb'
  },
  dimensions: {
    statusBarHeight: Constants.statusBarHeight,
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width,
    screenHeightWithOutStatusBar: Dimensions.get('window').height - Constants.statusBarHeight,
    headerHeight: 64,
    bottomNavbarHeight: 48,
    mobileDeviceBarsHeight: 64 + 48
  }
}
