import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VIEW_HOME_COMMUNICATION_DETAIL, VIEW_HOME } from '../../constants'
import Home from './home'
import CommunicationDetail from './detail'

const Stack = createNativeStackNavigator()
export default function HomeRoutes () {
  return (
    <Stack.Navigator
      initialRouteName={VIEW_HOME}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={VIEW_HOME} component={Home} />
      <Stack.Screen name={VIEW_HOME_COMMUNICATION_DETAIL} component={CommunicationDetail} />
    </Stack.Navigator>
  )
}
