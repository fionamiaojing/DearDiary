import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default class IdeaScreen extends React.Component {
  static navigationOptions = {
    title: 'I have an idea...',
    headerTitleStyle: { color: '#ffbbbb' },
  };

  
  render() {
    const { navigation } = this.props;
    const ideas = navigation.getParam('ideas');
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