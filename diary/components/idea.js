import React from 'react';
import { StyleSheet, TouchableHighlight, FlatList, Modal, 
    Text, TextInput, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postNewIdea, deleteIdea, fetchAllIdeas, toggleShow } from '../action/index';



class IdeaScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'I have an idea...',
            headerTitleStyle: { color: '#f7a5a5' },
            headerRight: (
                <Button
                    onPress={() => { navigation.state.params.toggleModal() }}
                    raise
                    icon = {{name: 'add', size: 25, color: '#f7a5a5'}}
                    backgroundColor='transparent'
                />
            ),
        }
    };

    componentDidMount() {
        this.props.fetchAllIdeas(this.props.userid, this.props.date);
        this.props.navigation.setParams({ 
            toggleModal: this.toggleModal.bind(this)
        });
    }

    toggleModal() {
        this.props.toggleShow(!this.props.show)
    }
    
    renderItem(idea) {
        const swipeBtns = [
            {
              text: 'Delete',
              backgroundColor: 'white',
              color: '#fa4659',
              onPress: () => {
                  this.props.deleteIdea(idea.id) 
            }
           },
        ];

        return (
            <Swipeout right={swipeBtns}
                backgroundColor= 'transparent'
            >
                <View style={styles.line}>
                    <Text style={styles.text}>
                        {idea.key}
                    </Text>
                </View>
            </Swipeout>
        )
    }
  
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5eee6'}}>
                <FlatList
                    data={this.props.ideas}
                    renderItem={
                        ({item}) => this.renderItem(item)
                    }
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.show}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalView}>
                            <View style={styles.modalTitle}>
                                <Text style={{ fontSize: 30, color: '#ef7b7b'}}>
                                    I have a New Idea...
                                </Text>
                            </View>
                            <View style={styles.modalContent}>
                                <TextInput 
                                    style={styles.textinput}
                                    placeholder="Enter here..."
                                    keyboardType="default"
                                    multiline={true}
                                    onChangeText={(text) => newIdea = text}
                                />
                            </View>
                            <View style={styles.modalButton}>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.props.toggleShow(!this.props.show);
                                        this.props.postNewIdea(
                                            this.props.userid,
                                            this.props.date,
                                            newIdea
                                        )
                                    }}>
                                    <Text style={styles.buttonText}>
                                        Submit
                                    </Text>
                                </TouchableHighlight>
                                <View style={{width: 40}}/>
                                <TouchableHighlight
                                    onPress={() => {
                                    this.props.toggleShow(!this.props.show);
                                    }}>
                                    <Text style={styles.buttonText}>
                                        Cancel
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        );
    }
}

let newIdea = '';

const mapStateToProps = (state) => {
    return {
        ideas: state.ideas,
        show: state.show,
        date: state.date,
        userid: state.userid
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        postNewIdea: postNewIdea,
        deleteIdea: deleteIdea,
        fetchAllIdeas: fetchAllIdeas,
        toggleShow: toggleShow
    }, dispatch);
};


export default connect(
    mapStateToProps,
    matchDispatchToProps
)(IdeaScreen);


const styles = StyleSheet.create({
    line: {
        height: 60,
        backgroundColor: '#e6a4b4',
        borderBottomWidth: 1,
        borderColor: 'white',
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
    modalTitle: {
        alignItems:'center',
    },
    modalView: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#cdd5e0',
    },
    modalContent: {
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 10,
        backgroundColor: '#ffe2e2',
        paddingHorizontal: 20,
        height: 100,
    },
    textinput: {
        fontSize: 20, 
        color: '#91ceff',
        alignItems: 'stretch'
    },
    modalButton: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    botton: {
        backgroundColor: '#f5b17b',
        marginHorizontal: 10
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ef7b7b'
    }
    
});