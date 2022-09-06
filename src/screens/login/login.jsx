import React, { useRef } from 'react'
import theme from '../../../theme'
import { Text, View, StyleSheet } from 'react-native'
import Layout from '../../components/Layout'
import Input from '../../components/Input'
import { AntDesign } from '@expo/vector-icons'
import DismissKeyboard from '../../components/DimissKeyboard'

export default function Login () {
  return (
    <DismissKeyboard>
      <Layout style={styles.container}>
        <View style={styles.content}>
          <View style={styles.content.title}>
            <Text style={styles.title}>
              BAD CO.
            </Text>
          </View>
          <View style={styles.form}>
            <View style={styles.form.input}>
              <Input
                placeholder='Mail'
                icon={<AntDesign name="mail" color='#4D4D4D' size={22} />}
                autoFocus
              />
            </View>
            <View style={styles.form.input}>
              <Input
                placeholder='Name'
                icon={<AntDesign name="user" color='#4D4D4D' size={24} />}
              />
            </View>
            <View style={styles.form.input}>
              <Input
                placeholder='Password'
                icon={<AntDesign name="lock" color='#4D4D4D' size={25} />}
                secureTextEntry
              />
            </View>
          </View>
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
    height: '70%',
    paddingTop: '30%',
    title: {
      width: '100%',
      alignItems: 'center'
    },
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: theme.font.family.anton,
    fontSize: 45,
    color: theme.color.primary
  },
  form: {
    height: '75%',
    input: {
      paddingVertical: 3
    }
  }
})
