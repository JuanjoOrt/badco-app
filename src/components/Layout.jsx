import React from 'react'
import { View } from 'react-native'

export default function Layout ({ children, style }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={[{ flex: 1 }, style]}>
        {children}
      </View>
    </View>
  )
}
