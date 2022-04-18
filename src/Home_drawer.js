/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// 네비게이션에서는 데이터를 보내는것을 데이터를 라우트(route)로 파싱한다고 한다

class DrewerHomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>home</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User');
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

export default DrewerHomeScreen;
