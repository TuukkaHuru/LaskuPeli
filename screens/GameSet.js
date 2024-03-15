import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { useTheme } from "../context/UseTheme";
import Styles from '../Styles';

export default function GameSet() {
    const navigation = useNavigation();
    const [gameOverPoints, setGameOverPoints] = useState(30); // Oletusarvo 30 pistettä
    const { isDarkMode } = useTheme();

    const handleSliderChange = (value) => {
        setGameOverPoints(value);
    };

    const handleButtonPress = () => {
        console.log("Valittu pistemäärä:", gameOverPoints); // Tulosta valittu pistemäärä
        navigation.navigate('Game', { gameOverPoints }); // Välitetään valitut pisteet Game-komponentille
    };
    const handleButtonPress2 = () => {
        console.log("Valittu pistemäärä:", gameOverPoints); // Tulosta valittu pistemäärä
        navigation.navigate('Game2', { gameOverPoints }); // Välitetään valitut pisteet Game-komponentille
    };
    const handleButtonPress3 = () => {       
        console.log("Valittu pistemäärä:", gameOverPoints); // Tulosta valittu pistemäärä
        navigation.navigate('Game3', { gameOverPoints }); // Välitetään valitut pisteet Game-komponentille
    };
    const handleButtonPress4 = () => {      
        console.log("Valittu pistemäärä:", gameOverPoints); // Tulosta valittu pistemäärä
        navigation.navigate('Game4', { gameOverPoints }); // Välitetään valitut pisteet Game-komponentille
    };

    return (
        <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[isDarkMode ? Styles.dark : Styles.light, { fontSize: 34 }]}>Valitse monestako pisteestä peli on poikki:</Text>
            <Text style={[isDarkMode ? Styles.dark : Styles.light, { fontSize: 34 }]}>{gameOverPoints}</Text>
            <Slider
                style={{ width: '100%', height: 40, marginTop: 20 }}
                minimumValue={10}
                maximumValue={100}
                step={1}
                value={gameOverPoints}
                onValueChange={handleSliderChange}
            />
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Plus Laskut"
                    onPress={handleButtonPress}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Miinus Laskut"
                    onPress={handleButtonPress2}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Kerto Laskut"
                    onPress={handleButtonPress3}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button
                    title="Jako Laskut"
                    onPress={handleButtonPress4}
                />
            </View>
        </View>
    );
}
