import React from 'react';
import LoginScreen from './components/login';
import HomeScreen from './components/home';
import CalendarScreen from './components/calendar';
import DiaryScreen from './components/diary';
import { createStackNavigator } from 'react-navigation';
import MoodScreen from './components/mood';
import IdeaScreen from './components/idea';
import StoryScreen from './components/story';
import PictureScreen from './components/pictures';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

const Navigator = createStackNavigator({
  Login: { screen: LoginScreen},
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen },
  Diary: { screen: DiaryScreen },
  Mood: { screen: MoodScreen },
  Idea : { screen: IdeaScreen },
  Story: { screen: StoryScreen },
  Picture: {screen: PictureScreen }
});



export default function App() {
  return (
    <Provider store={store}>
            <Navigator />
    </Provider>
  ); 
}


