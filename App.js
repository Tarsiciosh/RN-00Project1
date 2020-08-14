import * as React from 'react';
import { StyleSheet, View, Button, Vibration} from 'react-native';
import Constants from 'expo-constants';
import Counter from './Counter'

const REST_TIME = 300
const STUDY_TIME = 1500

export default class App extends React.Component {

  state = {
    count: STUDY_TIME,
    studyTime: STUDY_TIME,
    restTime: REST_TIME,
    shouldRun: false,
    countReached : false,
    studying : true,
    vibrate : false,
  }

  componentDidMount() {
    this.interval = setInterval(this.dec, 1000)
  }

  componentWillUnmount() {
    clearInterval (this.interval)
  }

  startCounter = () => {
    this.setState ({
      shouldRun: true,
    })
  }

  stopCounter = () => {
    this.setState ({
      shouldRun: false,
    })
  }

  resetCounter = () => {
    this.setState ({
      count: 25,
      studying: true,
    })
  }

  vibrate = () => {
    Vibration.vibrate ([500, 500, 500])
  }

  dec = () => {
    this.setState (prevState => {
      if (prevState.shouldRun) {
        if (prevState.count > 0) {
          return {count: prevState.count - 1}
        } else if (prevState.studying){
          this.vibrate()
          return ({
            count: prevState.restTime,
            studying: false,
            vibrate: true,
          })
        } else if (!prevState.studying) {
          this.vibrate()
          return ({
            count: prevState.studyTime,
            studying: true,
            vibrate: true,
          })
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="start" onPress={this.startCounter}/>
        <Button title="stop" onPress={this.stopCounter}/>
        <Button title="reset" onPress={this.resetCounter}/>
        <Counter segCount={this.state.count} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
})
