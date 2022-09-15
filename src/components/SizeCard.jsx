import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default function SizeCard ({ children, onPress, active }) {
  const containerStyles = [
    styles.container,
    active && styles.active
  ]
  const textStyles = [
    styles.text,
    active && styles.active
  ]

  const handleOnPress = () => onPress(children)

  return (
    <TouchableWithoutFeedback activeOpacity={'.5'} onPress={handleOnPress}>
      <View style={containerStyles}>
        <Text style={textStyles}>{ children.toUpperCase() }</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundColor: '#5b5b5b',
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    width: 'auto'
  }
})
