import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PlayScreen from "./screens/PlayScreen";
import HomeScreen from "./screens/HomeScreen";
import BuyScreen from "./screens/BuyScreen";
import FriendScreen from "./screens/FriendScreen";
import HarvestScreen from "./screens/HarvestScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Buy' component={BuyScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Play' component={PlayScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Friend' component={FriendScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Harvest' component={HarvestScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}