import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import AnimalCard from '../components/AnimalCard';
import animals from '../../data/animals.js'; // Assure-toi que le chemin est correct

export default function AnimalScreen() {
  return (
    <ScrollView style={styles.container}>
      {animals && animals.length > 0 ? (
        animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))
      ) : (
        <Text>Aucun animal trouvé.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
