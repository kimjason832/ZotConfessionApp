//import { NavigationContainer } from "@react-navigation/native";
//import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.js'
import ConfessionScreen from './Confessions.js'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Confessions" component={ConfessionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
