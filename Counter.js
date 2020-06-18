import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types'

const Counter = props => {
  const min = ("0" + Math.floor( props.segCount / 60)).slice(-2)
  const seg = ("0" + (props.segCount % 60)).slice(-2)

  return (
    <Text style= {styles.text} > {min}:{seg} </Text>
  )
}

Counter.propTypes= {
  segCount: PropTypes.number,
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "darkblue",
    fontFamily: "Verdana",
  },
})

export default Counter
