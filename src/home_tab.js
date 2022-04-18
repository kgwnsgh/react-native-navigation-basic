import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TabHomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>

        <Button
          title="Go TO Home Stack Screen"
          onPress={() => this.props.navigation.navigate('Home_Stack')}
        />
      </View>
    );
  }
}

export default TabHomeScreen;
