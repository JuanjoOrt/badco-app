import Main from './src/Main'
import { Provider } from 'react-redux'
import { store } from './src/_rx/store'

export default function App () {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
