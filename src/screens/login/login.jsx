import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { AntDesign } from '@expo/vector-icons'

export default function Login () {
  return (
    <View style={styles.container}>
      <View style={styles.container.child}>
        <Input
          placeholder='Mail'
          icon={<AntDesign name="mail" color='#4D4D4D' size={22} />}
          autoFocus
        />
      </View>
      <View style={styles.container.child}>
        <Input
          placeholder='Password'
          icon={<AntDesign name="lock" color='#4D4D4D' size={25} />}
          secureTextEntry
        />
      </View>
      <View style={styles.container.button}>
        <Button color='primary' >Log in</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '80%',
    child: {
      paddingVertical: 3
    },
    button: {
      marginTop: 15
    }
  }
})
