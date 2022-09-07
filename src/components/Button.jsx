import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../../theme'

export default function Button ({ children, color, onPress }) {
  const styles = [
    stylesDefault.button,
    color === 'primary' && stylesDefault.button.primary
  ]

  const stylesFont = [
    stylesDefault.font,
    color === 'primary' && stylesDefault.font.primary
  ]

  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles}>
        <View style={stylesDefault.content}>
          <Text style={stylesFont}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const stylesDefault = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 4,
    width: '100%',

    primary: { backgroundColor: theme.color.primary }
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontSize: 16,
    color: theme.color.primary,
    primary: { color: 'white' }
  }
})
