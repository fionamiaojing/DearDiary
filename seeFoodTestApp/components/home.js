import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Dear Diary',
            headerStyle: { backgroundColor: '#f7a5a5' },
            headerTitleStyle: { color: 'white' },
            headerRight: (
                <Button
                    raised
                    icon={{ name: 'date-range', size: 23}}
                    backgroundColor='transparent'
                    onPress={() => {navigation.navigate('Calendar')}}
                />
            )
        }
    }

    render() {
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
                <View style={{
                    backgroundColor: 'white',
                    width: 2000,
                }}>
                <Button 
                    color='#fbafaf'
                    title='Dear Diary...'
                    backgroundColor='transparent'
                    fontSize={40}
                    fontWeight='bold'
                    onPress={
                        () => this.props.navigation.navigate('Diary', {
                            userid: 'fiona',
                            date: '20180718'
                        })
                    }
                />
                </View>
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
