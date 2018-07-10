import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class DiaryScreen extends React.Component {
  static navigationOptions = {
    title: 'My Dear Diary Today',
    headerTitleStyle: { color: '#f7a5a5' },
  };

  
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.content1}>
              <Button 
                color='#a5d7e5'
                title="Dear Mood..."
                onPress={
                    () => this.props.navigation.navigate('Mood')
                }
              />
          </View>
          <View style={styles.content2}>
            <Button 
              color='#ffe2e2'
              title="Dear Idea..."
              onPress={
                  () => this.props.navigation.navigate('Idea')
              }
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.content2}>
            <Button 
              color='#ffe2e2'
              title="Dear Story..."
              onPress={
                  () => this.props.navigation.navigate('Story')
              }
            />
          </View>
          <View style={styles.content1}>
            <Button 
              color='#a5d7e5'
              title="Dear Picture..."
              onPress={
                  () => this.props.navigation.navigate('Picture')
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content1: {
    flex: 1,
    backgroundColor: '#ffe2e2',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 1
  },
  content2: {
    flex: 1,
    backgroundColor: '#bad7df',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 1
  },
});


//can fetch all data here or in the child components
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchAllIdeas } from '../action/index';
// const mapStateToProps = (state) => {
//   return {
//   };
// };

// const matchDispatchToProps = (dispatch) => {
//   return bindActionCreators({ 
//       fetchAllIdeas: fetchAllIdeas,
//   }, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   matchDispatchToProps
// )(DiaryScreen);