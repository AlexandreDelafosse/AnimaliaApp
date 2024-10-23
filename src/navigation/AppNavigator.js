import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnimalScreen from '../screens/AnimalScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import QuizzScreen from '../screens/QuizzScreen';

const Stack = createStackNavigator();

// Configuration du Linking pour le web
const linking = {
  prefixes: ['https://animalia-izixnx9za-alexandredelafosses-projects.vercel.app', 'ton-app://'],  // Enlève le slash à la fin
  config: {
    screens: {
      Home: '',
      Animal: 'animal',
      Preferences: 'preferences',
      Quizz: 'quizz',
    },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
        <Stack.Screen name="Quizz" component={QuizzScreen} initialParams={{ mode: 'default' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
