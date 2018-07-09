import React from 'react';
import { StyleSheet, LeftButton, Button, Text, View } from 'react-native';
import Slider from 'react-native-slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeMood, fetchMood, saveMood } from '../action/index';

class MoodScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return { 
            title: 'I Feel Like...',
            headerTitleStyle: { color: '#f7a5a5' },
            headerLeft: (
                <Button
                    onPress={() => navigation.state.params.saveMood()}
                    title="Back"
                    color='#f7a5a5'
                />
            ),
        }
    }

  componentDidMount() {
      this.props.fetchMood(this.props.userid, this.props.date)
      this.props.navigation.setParams({
          saveMood: this.saveMood
      })
  }

  saveMood = () => {
        this.props.navigation.navigate('Diary');
        this.props.saveMood(
            this.props.userid, 
            this.props.date, 
            this.props.moodvalue
        )
  }

  changeBackgroundColor(value) {
    let color = ''
    // if (value === 0.5 ) {
    //     color = '#ffe2e2'
    // }
    if (value < 0.5) {
        color = `rgba(137,164,199, ${1 - value})`
    } else {
        color = `rgba(234,175,175, ${value})`
    }
    return color
  }

  changeMoodText(value) {
    let mood = ''
    if (value < 0.2) {
        mood = 'Abysmal'
    } else if (value <= 0.4) {
        mood = 'Crummy'
    } else if (value <= 0.6) {
        mood ='Ho-hum'
    } else if (value < 0.8) {
        mood = 'Optimistic'
    } else {
        mood = 'Elated'
    }
    return mood
  }
  
  onMoodChange(value) {
    this.changeBackgroundColor(value);
    this.changeMoodText(value);
    this.props.changeMood(value);
  }

  render() {
    return (
        <View style={{
            flex: 1, 
            backgroundColor: this.changeBackgroundColor(this.props.moodvalue)
        }}>
            <Text style={styles.greeting}>
                Good Morning!
                Today will be better than yesterday
            </Text>
            <View style={styles.slider}>
                <Text style={styles.slideTitle}>
                    My feelings Today...
                </Text>
                <Slider
                    minimumTrackTintColor = '#878ecd'
                    maximumTrackTintColor = '#b9bbdf'
                    thumbTintColor = '#fcefee'
                    thumbTouchSize = {{width: 80, height: 80}}
                    value = {this.props.moodvalue}
                    onValueChange={
                        (moodvalue) => this.onMoodChange(moodvalue)
                    }
                />
                <Text style={styles.mood}>
                    {this.changeMoodText(this.props.moodvalue)}
                </Text>
            </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        moodvalue: state.moodvalue,
        date: state.date,
        userid: state.userid
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        changeMood: changeMood,
        fetchMood: fetchMood,
        saveMood: saveMood
    }, dispatch);
};


export default connect(
    mapStateToProps,
    matchDispatchToProps
)(MoodScreen);

var styles = StyleSheet.create({
    greeting: {
        marginTop: 80,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#9f609c'
    },
    slideTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#9f609c'
    },
    slider: {
        marginLeft: 10,
        marginRight: 10,
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    mood: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#9f609c'
    }
  });