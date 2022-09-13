import 'react-native-gesture-handler'
import Main from './src/Main'
import { Provider } from 'react-redux'
import { store } from './src/_rx/store'
import { useFonts } from 'expo-font'

export default function App () {
  const [fontsLoaded] = useFonts({
    'anton-regular': require('./assets/fonts/Anton-Regular.ttf')
  })

  return fontsLoaded && (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
