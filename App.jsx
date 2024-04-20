import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import PlayScreen from './screens/PlayScreen';
import HomeScreen from './screens/HomeScreen';
import BuyScreen from './screens/BuyScreen';
import FriendScreen from './screens/FriendScreen';
import HarvestScreen from './screens/HarvestScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Friend" component={FriendScreen} />
        <Stack.Screen name="Harvest" component={HarvestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
