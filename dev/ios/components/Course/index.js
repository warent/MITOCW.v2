import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
export default class Course extends Component {
  render() {
    return <View>
      <Text>{ this.props.children['test'] }</Text>
      </View>
  }
}