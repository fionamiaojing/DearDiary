import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'My Dear Diary',
        headerStyle: { backgroundColor: '#ffbbbb' },
        headerTitleStyle: { color: 'white' },
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={{flex: 1}}>
            <View style={styles.navigator}>
                {/* <Button
                    title="Create My Diary Today"
                    onPress={
                        () => this.props.navigation.navigate('Diary')
                    }
                    style={styles.navigateText}
                /> */}
            </View>
            
            <View style={styles.content}>
                <Button 
                    color='#294a66'
                    title="Dear Diary..."
                    onPress={
                        () => this.props.navigation.navigate('Diary', {
                            userid: 'fiona',
                            date: '20180718'
                        })
                    }
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#fcd2c2'
  },
//   navigateText: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     color: 'white',
//   },
  content: {
    flex: 16, 
    backgroundColor: '#ffe6eb',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  contentText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  }
});
