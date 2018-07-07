import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'See Flower',
    // };

    render() {
        const { navigate } = this.props.navigation;
        return (

        <View style={{flex: 1}}>
            {/* <View style={{flex: 1, backgroundColor: '#bad7df'}}>
            <Text style={styles.title}>See Flowers</Text>
            </View> */}
            <Button
                title="Go to Likes Page"
                onPress={
                    () => this.props.navigation.navigate('Like')
                }
            />
            <View style={{flex: 8, backgroundColor: '#ffe2e2'}}>

            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 40
  },
});
