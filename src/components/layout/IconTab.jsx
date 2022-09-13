import React from 'react'
import { View } from 'react-native'

export default function IconTab ({ icon, label }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {icon}
    </View>
  )
}
