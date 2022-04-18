import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TabUserScreen extends Component {
  render() {
    console.warn(this.props.route);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
      </View>
    );
  }
}

export default TabUserScreen;
