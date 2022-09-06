import { StyleSheet, TextInput, View } from 'react-native'

export default function Input ({ icon, placeholder, onPressOut, ...props }) {
  return (
      <View style={styles.container}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          {...props}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    zIndex: 100,
    fontSize: 18,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#c2c2cc',
    backgroundColor: '#d7d7da',
    borderRadius: 5,
    fontSize: 18
  }
})
