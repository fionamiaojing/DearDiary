import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default class PictureScreen extends React.Component {
  static navigationOptions = {
    title: 'Picture for the Day...',
    headerTitleStyle: { color: '#f7a5a5' },
  };

  
  render() {
    const { navigation } = this.props;
    const picture = navigation.getParam('picture');
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