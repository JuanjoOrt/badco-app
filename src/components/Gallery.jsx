import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import theme from '../../theme'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

// This is a sync component
export default function Gallery ({ photos = [] }) {
  const [imageSelected, setImageSelected] = useState(0)
  const image = photos[imageSelected]
  const showLeftArrow = imageSelected !== 0
  const showRightArrow = imageSelected !== photos.length - 1
  const handleLeftOption = () => setImageSelected(imageSelected - 1)
  const handleRightOption = () => setImageSelected(imageSelected + 1)

  return (
    <View>
      <View style={styles.gallery}>
        {showLeftArrow &&
          <TouchableWithoutFeedback onPress={handleLeftOption}>
            <View style={{ ...styles.arrow, ...styles.left }}>
              <AntDesign name='caretleft' size='30'/>
            </View>
          </TouchableWithoutFeedback>
        }
        {showRightArrow &&
          <TouchableWithoutFeedback onPress={handleRightOption}>
            <View style={{ ...styles.arrow, ...styles.right }}>
              <AntDesign name='caretright' size='30'/>
            </View>
          </TouchableWithoutFeedback>
        }
        <Image style={styles.image} source={{ uri: image }} resizeMode='contain'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gallery: {
    width: '100%',
    height: theme.dimensions.screenHeight / 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrow: {
    position: 'absolute',
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '.5'
  },
  left: {
    left: 0
  },
  right: {
    right: 0
  },
  image: {
    width: theme.dimensions.screenWidth / 1.5,
    height: theme.dimensions.screenHeight / 2
  }
})
