import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TabUserScreen extends Component {
  render() {
    //console.warn(this.props.route); // home.js에서 보내는 파라미터값이 전달되는지 확인
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
      </View>
    );
  }
}

export default TabUserScreen;
