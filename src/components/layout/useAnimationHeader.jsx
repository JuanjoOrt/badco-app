import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export default function useAnimationHeader () {
  const isInputSearchOpen = useSelector(state => state.user.isInputSearchOpen)
  const animationWidth = useRef(new Animated.Value(1)).current
  const animationOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (isInputSearchOpen) {
      Animated.timing(animationWidth, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start()
      Animated.timing(animationOpacity, {
        toValue: 1,
        duration: 1,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animationWidth, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }).start()
      Animated.timing(animationOpacity, {
        toValue: 0,
        delay: 100,
        duration: 20,
        useNativeDriver: false
      }).start()
    }
  }, [isInputSearchOpen])

  return { animationWidth, animationOpacity }
}
