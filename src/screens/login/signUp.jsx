import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import InputFormik from '../../components/forms/InputFormik'
import { AntDesign } from '@expo/vector-icons'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import { createUser } from '../../_rx/login/loginActions'

const initialValues = {
  email: '',
  password: '',
  userName: ''
}

export default function SignUp () {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    setIsLoading(true)
    dispatch((dispatch) => createUser(dispatch, { userMail: values.email.toLowerCase(), name: values.userName, ...values }))
      .catch(error => {
        console.error(error)
        setIsLoading(false)
      })
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      { ({ handleSubmit }) => (
        <View style={styles.container}>
          <View style={styles.container.child}>
            <InputFormik
              name='userName'
              placeholder='user name'
              icon={<AntDesign name="user" color='#4D4D4D' size={22} />}
              autoFocus
            />
          </View>
          <View style={styles.container.child}>
            <InputFormik
              name='email'
              placeholder='Mail'
              icon={<AntDesign name="mail" color='#4D4D4D' size={22} />}
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
            <Button color='primary' onPress={handleSubmit} isLoading={isLoading}>Sign up</Button>
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
