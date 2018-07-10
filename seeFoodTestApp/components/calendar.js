import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectDate } from '../action/index';



class CalendarScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Diary Calendar',
            headerStyle: { backgroundColor: '#f7a5a5' },
            headerTitleStyle: { color: 'white' },
            headerLeft: (
                <Button
                    raised
                    onPress={() => { navigation.state.params.exitCalendar()}}
                    icon={{name: 'home', size: 25}}
                    backgroundColor='transparent'

                />
            ),
        }
    };

    exitCalendar() {
        this.props.navigation.navigate('Home');
        this.props.selectDate(new Date().toDateString())
    }

    componentDidMount() {
        this.props.navigation.setParams({
            exitCalendar: this.exitCalendar.bind(this)
        })
    }

    renderDiary(date) {
        this.props.selectDate(new Date(date).toDateString());
        this.props.navigation.navigate('Diary');
    }


    render() {
        return (
            <View style={styles.container}>
                <CalendarPicker
                    selectedDayColor='#f7a5a5'
                    onDateChange={
                        (date) => {
                            this.renderDiary(date)
                        }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.date
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectDate: selectDate
    }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(CalendarScreen)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5eee6',
      marginTop: 100,
    },
});