import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function PreferencesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préférences</Text>
      {/* Ajoute ici les options de préférences */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Thème clair/sombre</Text>
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
