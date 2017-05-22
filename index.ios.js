import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';

var StopWatch = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style= {[this.border('red'), styles.timerWrapper]}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={[this.border('green'), styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of laps
        </Text>
      </View>
    </View>
  },

  startStopButton: function (){
    return <View>
        <Text>
          Start
        </Text>
      </View>
  },

  lapButton: function(){
    return <View>
        <Text>
          Lap
        </Text>
      </View>
  },
// sets a border on each element to help woth flexbox layout
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  header: { // yellow
    flex: 1
  },

  footer: { // blue
    flex: 1
  },

  timerWrapper: { // red
    flex: 5, // take up 5/8 of available space
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonWrapper: { // green
    flex: 3, // takes up 3/8 of space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
