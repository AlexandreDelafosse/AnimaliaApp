import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { quizzData } from '../../data/quizzData'; // Assurez-vous que vos données sont bien importées

export default function QuizzScreen({ route, navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Pour stocker la réponse sélectionnée

  const currentQuestion = quizzData[currentQuestionIndex];

  // Sélectionner une option
  const handleSelectOption = (option) => {
    setSelectedOption(option); // Mettre à jour l'option sélectionnée
  };

  // Valider la réponse et passer à la question suivante
  const handleSubmit = () => {
    if (selectedOption === null) {
      Alert.alert('Alerte', 'Vous devez sélectionner une option.');
      return;
    }

    const isCorrect = selectedOption === currentQuestion.answer;

    Alert.alert(
      isCorrect ? "Bonne réponse !" : "Mauvaise réponse",
      currentQuestion.explanation,
      [{ text: "Continuer", onPress: () => goToNextQuestion() }]
    );
  };

  // Passer à la question suivante
  const goToNextQuestion = () => {
    setSelectedOption(null); // Réinitialiser l'option sélectionnée
    if (currentQuestionIndex < quizzData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("Félicitations !", "Vous avez terminé le quiz !");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <Pressable
          key={index}
          style={[
            styles.option,
            selectedOption === option ? styles.selectedOption : null
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={selectedOption === option ? styles.selectedOptionText : null}>
            {option}
          </Text>
        </Pressable>
      ))}

      <Pressable 
        style={styles.button} 
        onPress={handleSubmit} // S'assurer que la fonction est reliée au bouton
      >
        <Text style={styles.buttonText}>Valider</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#007BFF',
  },
  selectedOptionText: {
    color: '#fff',
  },
  button: {
    marginTop: 20,
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
