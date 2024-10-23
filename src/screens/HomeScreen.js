import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Animalia!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Animal')}
      >
        <Text style={styles.buttonText}>Voir les fiches d'animaux</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Quizz')}
      >
        <Text style={styles.buttonText}>Commencer un quizz</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Preferences')}
      >
        <Text style={styles.buttonText}>Voir les préférences</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
