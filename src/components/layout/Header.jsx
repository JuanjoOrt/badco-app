import React from 'react'
import { Image, StyleSheet, TextInput, View, TouchableWithoutFeedback, ScrollView } from 'react-native'
import theme from '../../../theme'
import { AntDesign, Feather } from '@expo/vector-icons'
import { IS_MOBILE, IS_TABLET } from '../../constants'
import { useDispatch } from 'react-redux'
import { setTabletSidebar } from '../../_rx/user/userSlice'

export default function Header () {
  const dispatch = useDispatch()
  const handleTabletMenu = () => dispatch(setTabletSidebar(true))

  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        { IS_TABLET &&
          <TouchableWithoutFeedback onPress={handleTabletMenu}>
            <Feather name="menu" color='#4D4D4D' size={30} />
          </TouchableWithoutFeedback>
        }
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
        />
      </View>
      <View style={styles.title}>
        <View>
          <ScrollView>
            <View style={styles.inputContainer} >
              <TextInput style={styles.bar}/>
              <View style={styles.icon}>
                <AntDesign name="search1" color='#4D4D4D' size={18} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: theme.dimensions.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#c4c4c4'
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
  },
  title: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    width: theme.dimensions.screenWidth - (IS_MOBILE ? 70 : 100)
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center'
  },
  bar: {
    height: 30,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 30,
    width: IS_TABLET ? 300 : theme.dimensions.screenWidth - 80
  },
  icon: {
    position: 'absolute',
    right: 5
  }
})
