import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button } from 'react-native-elements';

export default class PictureScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Picture for the Day...',
            headerTitleStyle: { color: '#f7a5a5' },
            headerRight: (
                <Button
                  // onPress={() => { navigation.state.params.pickimage() }}
                  raise
                  icon = {{name: 'camera-alt', size: 25, color: '#f7a5a5'}}
                  backgroundColor='transparent'
                />
            )
        }   
    }

    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         pickimage: this.pickimage.bind(this)
    //     })
    // }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.row}>
                    <View style={styles.pic}>
                        <Image
                            style={{width: 180, height: 230}}
                            source={require('../babycat.png')}
                        />
                    </View>
                    <View style={styles.pic}>
                        <Image
                            style={{width: 180, height: 240}}
                            source={require('../cutedog1.png')}
                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.pic}>
                    </View>
                    <View style={styles.pic}>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.pic}>
                    </View>
                    <View style={styles.pic}>
                    </View>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    content: {
        alignItems:'center',
        justifyContent:'center',
    },
    row: {
      flex: 1,
      flexDirection: 'row'
    },
    pic: {
      flex: 1,
      borderColor: 'white',
      borderWidth: 1
    }
});

//pickimage() {
    //     var options = {
    //       title: 'Select Avatar',
    //       customButtons: [
    //         {name: 'fb', title: 'Choose Photo from Facebook'},
    //       ],
    //       storageOptions: {
    //         skipBackup: true,
    //         path: 'images'
    //       }
    //     };
    //     console.log(typeof ImagePicker.showImagePicker);
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //           console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //           console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //           console.log('sss')
    //           // let source = { uri: response.uri };
          
    //           // // You can also display the image using data:
    //           // // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
    //           // this.setState({
    //           //   avatarSource: source
    //           // });
    //         }
    //     })
    // };