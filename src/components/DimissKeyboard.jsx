import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

export default function DismissKeyboard ({ children }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}
