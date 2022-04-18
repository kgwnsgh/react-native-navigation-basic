/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Logo from '../assets/pics/home_icone.png';

class UserScreen extends Component {
  // header 스타일을 함수로 만들어 그 값을 props을 통해서 가지고와서 setOptions를 통해서 설정하고 render()에서 함수 호출을 통해서 적용
  headerStyle = () => {
    this.props.navigation.setOptions({
      title: 'Customizing',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
      headerBackTitle: 'Back', // 뒤로가기 버튼의 글자를 변경
      headerRight: () => (
        <Button
          title="Go Back"
          color="orange"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }} // 지금은 화면이 2개라서 이전화면으로 가는거 같지만 화면이 다양하면 원하는 페이지로 이동시킬수 있음
        />
      ),
    });
  };

  render() {
    this.headerStyle(); // 함수를 호출해야 headerStyle로 만들어둔 style이 적용이 된다
    const {params} = this.props.route; // params를 저장하기 위해서props 즉 Home에서 파라미터를 확인해서 params에 저장
    const userIdx = params ? params.userIdx : null; // params이 있으면 params.userIdx를 가지고와서 저장하고 아니면 null을 저장
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <Text>User Idx: {JSON.stringify(userIdx)}</Text>
        <Text>User Name: {JSON.stringify(userName)}</Text>
        <Text>User Last Name: {JSON.stringify(userLastName)}</Text>
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

export default UserScreen;
