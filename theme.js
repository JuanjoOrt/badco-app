import { Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default {
  font: {
    family: {
      anton: 'anton-regular'
    }
  },
  color: {
    primary: '#8379C7FF'
  },
  dimensions: {
    statusBarHeight: Constants.statusBarHeight,
    screenHeight: Dimensions.get('screen').height,
    screenWidth: Dimensions.get('screen').width,
    screenHeightWithOutStatusBar: Dimensions.get('screen').height - Constants.statusBarHeight,
    headerHeight: 70,
    footerHeight: 70
  }
}
