import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../../components/Button'
import { AntDesign } from '@expo/vector-icons'
import InputFormik from '../../components/forms/InputFormik'
import { Formik } from 'formik'

const initialValues = {
  email: '',
  password: ''
}

export default function Login () {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      { ({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.container.child}>
            <InputFormik
              name='email'
              placeholder='Mail'
              icon={<AntDesign name="mail" color='#4D4D4D' size={22} />}
              autoFocus
            />
          </View>
          <View style={styles.container.child}>
            <InputFormik
              name='password'
              placeholder='Password'
              icon={<AntDesign name="lock" color='#4D4D4D' size={25} />}
              secureTextEntry
            />
          </View>
          <View style={styles.container.button}>
            <Button color='primary' onPress={handleSubmit}>Log in</Button>
          </View>
        </View>
      )}
    </Formik>
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
