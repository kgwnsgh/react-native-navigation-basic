import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Logo from '../assets/pics/home_icone.png';
import {CommonActions} from '@react-navigation/native';

class my_drawer extends Component {
  navigateToScreen = route => () => {
    // () => () => 에로우 함수가 두개이기 때문에 리턴값은 2개를 받아야 한다
    this.props.navigation.dispatch(
      // dispatch는 터치된 것을 통해서 스테이트 값을 업데이트 해줌
      CommonActions.navigate({
        //CommonActions이 다양한 액션을 사용할수 있게해주고
        name: route,
        params: {},
      }),
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={Logo} style={{width: 40, height: 40}} />
            </View>
            <Text style={styles.sectionPdding}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={() => alert('Help Window')}>
                Help
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={() => alert('Info Window')}>
                Info
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft: 10, paddingBottom: 30}}>
          <Text>Copyright @ Wintho 2022,</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionPdding: {
    color: '#fff',
    backgroundColor: '#ef9ed4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});

export default my_drawer;
