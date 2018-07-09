import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';


export default class CalendarScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Diary Calendar',
            headerStyle: { backgroundColor: '#f7a5a5' },
            headerTitleStyle: { color: 'white' },
            headerLeft: (
                <Button
                    raised
                    onPress={() => { navigation.navigate('Home')}}
                    icon={{name: 'home', size: 25}}
                    backgroundColor='transparent'

                />
            ),
        }
    };


    render() {
        return (
            <View>
            </View>
        );
    }
}