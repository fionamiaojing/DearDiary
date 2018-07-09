import React from 'react';
import { StyleSheet, Alert, ScrollView, TextInput, Button, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeStory, postStory, fetchStory } from '../action/index'

class StoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Dear Story...',
            headerTitleStyle: { color: '#f7a5a5' },
            headerRight: (
                <Button
                    onPress={() => { navigation.state.params.postStory() }}
                    title="SAVE"
                    color="#f7a5a5"
                />
            ),
        }
    };

    componentDidMount() {
        this.props.fetchStory(this.props.userid, this.props.date)
        this.props.navigation.setParams({ 
          postStory: this.postStory.bind(this)
      });
    }

    postStory() {
        this.props.postStory(this.props.userid, this.props.date, this.props.story);
        Alert.alert(
            'Story Saved',
            '',
            [
              {text: 'Stay', onPress: () => console.log('pressed stay')},
              {text: 'Leave', onPress: () => this.props.navigation.navigate('Diary')}
            ],
            { cancelable: false }
        )
    }
    
    render() {

        return (
            <View style={styles.page}>
                <ScrollView keyboardDismissMode='interactive'>
                    <TextInput 
                        style={{color: '#0f4137'}}
                        multiline={true}
                        value={this.props.story}
                        onChangeText={(text) => {
                            this.props.changeStory(text);
                        }}
                        autoFocus={true}
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        story: state.story,
        userid: state.userid,
        date: state.date
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeStory: changeStory,
        postStory: postStory,
        fetchStory: fetchStory
    }, dispatch);
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(StoryScreen)

const styles = StyleSheet.create({
    page: {
      flex: 1,
      paddingLeft: 10,
      backgroundColor: '#ffe6eb'
    },
});