import React from 'react';
import HomeScreen from './components/home';
import LikeScreen from './components/like';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Like: { screen: LikeScreen },
});

export default App;


