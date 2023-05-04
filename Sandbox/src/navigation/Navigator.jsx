import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Map from '../screens/Map'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const TabStack = createBottomTabNavigator()

function ProfileNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  )
}

function Navigator () {
  return (
    <TabStack.Navigator initialRouteName='Home'>
      <TabStack.Screen name='Home' component={Home} />
      <TabStack.Screen options={{ headerShown: false }} name='ProfileStack' component={ProfileNavigator} />
    </TabStack.Navigator>
  )
}

export default Navigator
