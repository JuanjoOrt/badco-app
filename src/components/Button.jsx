import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import theme from '../../theme'
import { AntDesign } from '@expo/vector-icons'
import useAnimation from '../hooks/useAnimation'

export default function Button ({ children, color, onPress, isLoading }) {
  const [animation, animationInterpolate] = useAnimation('0deg', '360deg')
  const styles = [
    stylesDefault.button,
    color === 'primary' && stylesDefault.button.primary
  ]

  const stylesFont = [
    stylesDefault.font,
    color === 'primary' && stylesDefault.font.primary,
    { display: isLoading ? 'none' : 'flex' }
]

  const handlePress = () => {
    if (onPress && !isLoading) onPress()
  }

  useEffect(() => {
    Animated.loop(Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: false
    })).start()
  }, [])

  return (
    <View>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={styles}>
        <View style={stylesDefault.content}>
          <Animated.View
            style={{
              transform: [{ rotate: animationInterpolate }],
              display: isLoading ? 'flex' : 'none'
            }}>
            <AntDesign name="loading1" size={22} color='white'/>
          </Animated.View>
          <Text style={stylesFont}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const stylesDefault = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 4,
    width: '100%',

    primary: { backgroundColor: theme.color.primary }
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontSize: 16,
    color: theme.color.primary,
    primary: { color: 'white' }
  }
})
