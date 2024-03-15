import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './screens/Home';
import Settings from './screens/Settings';
import MainAppbar from './components/MainAppbar';
import { StatusBar, StyleSheet } from 'react-native';
import ThemeProvider from './context/ThemeProvider';
import StateProvider from './context/StateProvider';
import Game from './screens/Game';
import Game2 from './screens/Game2';
import Game3 from './screens/Game3';
import Game4 from './screens/Game4';
import Result from './screens/Result';
import GameSet from './screens/GameSet';
import GameOver from './screens/GameOver';





export default function App() {
    const Stack = createStackNavigator();

  return (
    <PaperProvider>
      <ThemeProvider>
      <StateProvider>
        <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{header: (props) => 
          <MainAppbar {...props} backgroundColor="#666" icon="cog" color="#fff"/>,
          }}
          >
          <Stack.Screen name="Home">
            {() =>
            <Home />
            }
            </Stack.Screen>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Game" component={Game} /> 
          <Stack.Screen name="Game2" component={Game2} /> 
          <Stack.Screen name="Game3" component={Game3} /> 
          <Stack.Screen name="Game4" component={Game4} /> 
          <Stack.Screen name="Result" component={Result} /> 
          <Stack.Screen name="GameSet" component={GameSet} /> 
          <Stack.Screen name="GameOver" component={GameOver} />
        </Stack.Navigator>
      </NavigationContainer>
      </StateProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
