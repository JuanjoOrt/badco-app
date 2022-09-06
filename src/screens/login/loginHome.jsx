import React, { useEffect } from 'react'
import theme from '../../../theme'
import { Text, View, StyleSheet, Animated } from 'react-native'
import Layout from '../../components/Layout'
import DismissKeyboard from '../../components/DimissKeyboard'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { VIEW_LOGIN_HOME, VIEW_LOGIN_LOGIN, VIEW_LOGIN_SIGNUP } from '../../constants'
import SignUp from './signUp'
import Login from './login'
import { setViewStatus } from '../../_rx/login/loginSlice'
import useAnimation from '../../hooks/useAnimation'

export default function LoginHome () {
  const [logoAnimation, logoAnimationValue] = useAnimation('50%', '10%')
  const status = useSelector(state => state.login.viewStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status !== VIEW_LOGIN_HOME) {
      Animated.timing(logoAnimation, {
        toValue: 1,
        duration: 200
      }).start()
    }
  }, [status])

  return (
    <DismissKeyboard>
      <Layout style={styles.container}>
        <View style={styles.content}>
          <Animated.View style={{
            ...styles.content.title,
            marginTop: logoAnimationValue
          }}>
            <Text style={styles.title}>
              BAD CO.
            </Text>
          </Animated.View>
          { status === VIEW_LOGIN_LOGIN && <Login /> }
          { status === VIEW_LOGIN_SIGNUP && <SignUp /> }
          { status === VIEW_LOGIN_HOME &&
            <View style={styles.buttonSection}>
              <Button
                color='primary'
                onPress={() => dispatch(setViewStatus(VIEW_LOGIN_LOGIN))}
              >Log in</Button>
              <Button
                onPress={() => dispatch(setViewStatus(VIEW_LOGIN_SIGNUP))}
              >Sign up</Button>
            </View>
          }
        </View>
      </Layout>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '80%',
    height: '80%',
    title: {
      width: '100%',
      alignItems: 'center'
    },
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: theme.font.family.anton,
    fontSize: 45,
    color: '#6c60a8'
  },
  buttonSection: {
    height: '20%'
  }
})
