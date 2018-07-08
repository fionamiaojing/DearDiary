import React from 'react';
import { StyleSheet, FlatList, Button, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addIdeas, deleteIdeas, fetchAllIdeas } from '../action/index';



class IdeaScreen extends React.Component {
    static navigationOptions = {
        title: 'I have an idea...',
        headerTitleStyle: { color: '#f7a5a5' },
    };

    componentDidMount() {
        this.props.fetchAllIdeas('fiona', '20180702');
    }

    renderItem(idea) {
        const swipeBtns = [
            {
              text: 'Delete',
              backgroundColor: 'red',
              onPress: () => { this.props.deleteIdeas(idea) }
           },
        ];

        return (
            <Swipeout right={swipeBtns}
                // autoClose='true'
                // backgroundColor= 'transparent'
            >
                <View style={styles.line}>
                    <Text style={styles.text}>
                        {idea}
                    </Text>
                </View>
            </Swipeout>
        )
    }
  
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.props.ideas}
                    renderItem={
                        ({item}) => this.renderItem(item.key)
                    }
                />
            </View>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        ideas: state.ideas
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        addIdeas: addIdeas,
        deleteIdeas: deleteIdeas,
        fetchAllIdeas: fetchAllIdeas
    }, dispatch);
};


export default connect(
    mapStateToProps,
    matchDispatchToProps
)(IdeaScreen);


const styles = StyleSheet.create({
    line: {
        height: 60,
        backgroundColor: '#F2C6B4',
        borderBottomWidth: 1,
        borderColor: 'white',
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4e709d',
        marginLeft: 10,
    },
    content: {
      alignItems:'center',
      justifyContent:'center',
    },
});