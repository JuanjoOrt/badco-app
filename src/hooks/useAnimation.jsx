import { useRef } from 'react'
import { Animated } from 'react-native'

export default function useAnimation (initInter, endInter) {
  const animation = useRef(new Animated.Value(0)).current
  const interpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [initInter, endInter]
  })
  return [animation, interpolate]
}
