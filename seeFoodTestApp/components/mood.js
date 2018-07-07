import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default class MoodScreen extends React.Component {
  static navigationOptions = {
    title: 'I Feel Like...',
    headerTitleStyle: { color: '#ffbbbb' },
  };

  
  render() {
    const { navigation } = this.props;
    const mood = navigation.getParam('mood');
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