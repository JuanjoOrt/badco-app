import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../../theme'

export default function Footer () {
  return <View style={styles.footer} />
}

const styles = StyleSheet.create({
  footer: {
    height: theme.dimensions.footerHeight,
    backgroundColor: 'blue'
  }
})
