import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button'
import { AntDesign } from '@expo/vector-icons'
import InputFormik from '../../components/forms/InputFormik'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_rx/login/loginActions'

const initialValues = {
  email: '',
  password: ''
}

export default function Login () {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (values, { setFieldError }) => {
    setIsLoading(true)
    dispatch(dispatch => loginUser(dispatch, { userMail: values.email.toLowerCase(), password: values.password }))
      .catch(error => {
        setIsLoading(false)
        const errorMessage = error.message
        const errorField = error.payload.param
        if (errorField !== 'field_value') setFieldError(errorField, errorMessage)
        if (!errorField) setError(errorMessage)
      })
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
          {error && <Text style={styles.errorText}>{error}</Text>}
          <View style={styles.container.button}>
            <Button color='primary' onPress={handleSubmit} isLoading={isLoading}>Log in</Button>
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
  },
  errorText: {
    color: '#bb2424',
    fontWeight: 'bold',
    marginBottom: 10
  }
})
