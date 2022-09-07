import React from 'react'
import { Animated, Image, StyleSheet, TextInput, View, TouchableWithoutFeedback } from 'react-native'
import theme from '../../../theme'
import { useDispatch, useSelector } from 'react-redux'
import { setInputSearchOpen } from '../../_rx/user/userSlice'
import useAnimationHeader from './useAnimationHeader'
import { AntDesign } from '@expo/vector-icons'

export default function Header () {
  const dispatch = useDispatch()
  const isInputSearchOpen = useSelector(state => state.user.isInputSearchOpen)
  const userInfo = useSelector(state => state.user.sessionInfo.data)
  const { animationOpacity, animationWidth } = useAnimationHeader()

  const handleInputPressed = () => {

    dispatch(setInputSearchOpen(true))
  }

  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
        />
      </View>
      <View style={styles.title}>
        <Animated.Text
          style={{
            fontSize: 16,
            opacity: animationOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0]
            }),
            width: isInputSearchOpen ? 0 : animationWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '50%']
            })
          }}
        >
          Hola {userInfo.name}
        </Animated.Text>
        <TouchableWithoutFeedback onPressIn={handleInputPressed}>
          <Animated.View
            style={{
              ...styles.inputContainer,
              width: animationWidth.interpolate({
                inputRange: [0, 1],
                outputRange: [theme.dimensions.screenWidth - 80, 30]
              })
            }}
          >
            <TextInput
              style={{
                ...styles.bar,
                color: isInputSearchOpen ? 'black' : 'transparent'
              }}
            />
            <View style={styles.icon}>
              <AntDesign name="search1" color='#4D4D4D' size={20} />
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  title: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    width: theme.dimensions.screenWidth - 70
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center'
  },
  bar: {
    height: 30,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    paddingLeft: 10
  },
  icon: {
    position: 'absolute',
    right: 5
  }
})
