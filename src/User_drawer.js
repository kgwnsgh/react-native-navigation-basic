/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import User from '../assets/pics/user.png';

class DrewerUserScreen extends Component {
  drawerStyle = () => {
    this.props.navigation.setOptions({
      drawerIcon: () => <Image source={User} style={{width: 40, height: 40}} />,
    });
  };

  render() {
    this.drawerStyle(); // 클래스의 렌더는 호출이 되어야 이루어 지기 때문에 user user 페이지가 호출 되어야 변경된 drawer이미지가 적용이됨
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default DrewerUserScreen;
