import { Animated } from 'react-native'

export default function useAnimation (initInter, endInter) {
  const animation = new Animated.Value(0)
  const interpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [initInter, endInter]
  })
  return [animation, interpolate]
}
