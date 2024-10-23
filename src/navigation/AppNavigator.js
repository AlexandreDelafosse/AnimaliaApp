import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnimalScreen from '../screens/AnimalScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import QuizzScreen from '../screens/QuizzScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
        <Stack.Screen name="Quizz" component={QuizzScreen} initialParams={{ mode: 'default' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
