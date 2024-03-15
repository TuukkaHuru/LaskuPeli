import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import { useTheme } from "../context/UseTheme";
import Styles from '../Styles';

export default function Game3() {
  const navigation = useNavigation();
  const route = useRoute(); 
  const { isDarkMode } = useTheme();

  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [Answer, setAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState(0);
  const { gameOverPoints } = route.params;
  
  

  useEffect(() => {
    generateRandomNumbers(); // Kutsu funktiota komponentin ensimmäisellä renderöinnillä
  }, []);

  useEffect(() => {
    setAnswer((number1 * number2).toString());
  }, [number1, number2]);


  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      navigation.navigate('Result', { 
        Answer,
        userAnswer,
        gameOverPoints,
        
      });
    }
  }, [timerRunning, timeLeft, navigation, Answer, userAnswer]);

  const handleButtonPress = () => {
    
    // Välitetään käyttäjän antamat arvaukset Result-komponentille
    navigation.navigate('Result', { 
      Answer,
      userAnswer,
      gameOverPoints,
    });
  };

  const generateRandomNumbers = () => {
    const newNumber1 = Math.floor(Math.random() * 10) + 1;
    const newNumber2 = Math.floor(Math.random() * 10) + 1;
    setNumber1(newNumber1);
    setNumber2(newNumber2);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeLeft(30);
      generateRandomNumbers();
      setTimerRunning(true);
      setAnswer('');
      setUserAnswer('');
    });

    return unsubscribe;
  }, [navigation]);


  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={[isDarkMode ? Styles.dark : Styles.light, { fontSize: 34, marginBottom: 200 }]}>Aikaa jäljellä: {timeLeft} s</Text>
      <Text style={[isDarkMode ? Styles.dark : Styles.light, { fontSize: 36, marginBottom: 70 }]}>{number1} * {number2}</Text>
      <TextInput
    placeholder="Kirjoita vastaus"
    value={userAnswer.toString()}
    onChangeText={setUserAnswer}
    style={[isDarkMode ? Styles.dark : Styles.light, { fontSize: 40 , marginBottom: 50, borderWidth: 1, borderColor: 'red'}]}
    placeholderTextColor={isDarkMode ? 'white' : 'black'}
    keyboardType="numeric"
/>


      <Button title="Submit" onPress={handleButtonPress} />
      
    </View>
  );
}
