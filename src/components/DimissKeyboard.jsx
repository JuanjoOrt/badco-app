import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

export default function DismissKeyboard ({ children, onPress }) {
  const handleOnPress = () => {
    Keyboard.dismiss()
    onPress && onPress()
  }

  return (
      <TouchableWithoutFeedback
        onPress={handleOnPress}>
        <View style={{ flex: 1 }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
  )
}
