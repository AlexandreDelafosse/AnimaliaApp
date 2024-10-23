import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'; // Le fichier de navigation

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
});
