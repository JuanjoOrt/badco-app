import React from 'react'
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import theme from '../../../theme'
import { Feather } from '@expo/vector-icons'
import { IS_MOBILE, IS_TABLET } from '../../constants'
import { useNavigation } from '@react-navigation/native'

export default function Header () {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        { IS_TABLET &&
          <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
            <Feather name="menu" color='#4D4D4D' size={30} />
          </TouchableWithoutFeedback>
        }
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: theme.dimensions.headerHeight,
    marginTop: theme.dimensions.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
    backgroundColor: 'white'
  },
  avatar: {
    height: '100%',
    width: IS_MOBILE ? 50 : 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100
  }
})
