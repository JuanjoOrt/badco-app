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
    screenHeight: Dimensions.get('screen').height - Constants.statusBarHeight,
    screenWidth: Dimensions.get('screen').width,
    headerHeight: 70,
    footerHeight: 70
  }
}
