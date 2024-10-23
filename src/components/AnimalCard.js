import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimalCard({ animal }) {
  return (
    <View style={styles.card}>
      {/* Ajoute l'image de l'animal */}
      <Image source={{ uri: animal.image }} style={styles.image} />
      <Text style={styles.title}>{animal.name}</Text>
      <Text style={styles.description}>{animal.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150, // Taille de l'image
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
