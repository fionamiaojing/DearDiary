import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default class StoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Dear Story...',
    headerTitleStyle: { color: '#ffbbbb' },
  };

  
  render() {
    const { navigation } = this.props;
    const story = navigation.getParam('story');
    // const timestamp = navigation.getParam('data')

    return (

      <View style={{flex: 1}}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      alignItems:'center',
      justifyContent:'center',
    },
});