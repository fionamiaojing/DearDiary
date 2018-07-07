import React from 'react';
import HomeScreen from './components/home';
import DiaryScreen from './components/diary';
import { createStackNavigator } from 'react-navigation';
import MoodScreen from './components/mood';
import IdeaScreen from './components/idea';
import StoryScreen from './components/story';
import PictureScreen from './components/pictures';


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Diary: { screen: DiaryScreen },
  Mood: { screen: MoodScreen },
  Idea : { screen: IdeaScreen },
  Story: { screen: StoryScreen },
  Picture: {screen: PictureScreen }
});

export default App;


