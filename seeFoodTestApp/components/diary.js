import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';


export default class DiaryScreen extends React.Component {
  static navigationOptions = {
    title: 'My Dear Diary Today',
    headerTitleStyle: { color: '#ffbbbb' },
  };

  
  render() {
    const { navigation } = this.props;
    const uesrId = navigation.getParam('userid');
    const timestamp = navigation.getParam('data')

    return (

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.content1}>
              <Button 
                color='#bad7df'
                title="Dear Mood..."
                onPress={
                    () => this.props.navigation.navigate('Mood', {
                        mood: 70,
                    })
                }
              />
          </View>
          <View style={styles.content2}>
            <Button 
              color='#ffe2e2'
              title="Dear Idea..."
              onPress={
                  () => this.props.navigation.navigate('Idea', {
                      idea: ['bbb', 'aaa'],
                  })
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
                  () => this.props.navigation.navigate('Story', {
                      story: ['story1', 'story2'],
                  })
              }
            />
          </View>
          <View style={styles.content1}>
            <Button 
              color='#bad7df'
              title="Dear Picture..."
              onPress={
                  () => this.props.navigation.navigate('Picture', {
                      picture: ['url1', 'url2'],
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