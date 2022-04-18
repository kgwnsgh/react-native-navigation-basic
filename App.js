/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, Linking} from 'react-native';
import {Link, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerItemList,
  drawerContentOptions,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import InfoIcon from './src/info';
import DrawerHomeScreen from './src/Home_drawer';
import DrawerUserScreen from './src/User_drawer';
import Pictogram from './assets/pics/home_icone.png';
import SideDrawer from './src/my_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/mesaage_tab';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import StackHomeScreen from './src/home';
import StackUserScreen from './src/user';

const Stack = createNativeStackNavigator(); // 이 함수를 호출해서 Stack에 저장해서 Stack에서 내부 함수를 호출해서 사용하는 방식으로 사용
const Drawer = createDrawerNavigator(); // DrawerNavigator 사용을 위해서 함수를 호출
const Tab = createBottomTabNavigator(); // Tab navigation을 사용할 함수 호출

/*
  Stack Naavigator
  -Tab Navigator
    -Tab Screen D
    -Tab Screen E
    -Tab Screen F
  - Stack Screen B
  - Stack Screen C
*/

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: 'skyblue',
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelPosition: 'below-icon', // 라벨의 옆에 나오게 설정
        tabBarLabel: route.name, // route를 통해 name값을 받아서 그 네임을 적용
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name), // tabarIcon 함수를 통해 포커스된 대상에 함수 적용
        tabBarStyle: {
          backgroundColor: '#c6cbef',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={TabHomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="User"
        component={TabUserScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Message"
        component={TabMessageScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let IconName, iconSize;

  if (name === 'Home') {
    IconName = 'home';
    //iconImagePath = require('./assets/pics/home_icone.png');
  } else if (name === 'User') {
    IconName = 'people-outline';
    // iconImagePath = require('./assets/pics/user_tab.png');
  } else if (name === 'Message') {
    IconName = 'mail-outline';
    // iconImagePath = require('./assets/pics/Message_tab.png');
  }

  iconSize = focused ? 30 : 20;
  return (
    // <Image
    //   style={{
    //     width: focused ? 36 : 20,
    //     height: focused ? 36 : 20,
    //   }}
    //   source={iconImagePath}
    // />

    <Ionicons name={IconName} size={iconSize} />
  );
};

// eslint-disable-next-line no-undef
CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('http://www.google.com')}
        icon={() => <LogoTitle />}
      />
      <DrawerItem
        label="Info"
        icon={() => <InfoIcon />}
        onPress={() => alert('Info window')}
      />
    </DrawerContentScrollView>
  );
}; // 아이콘이 들어간 사이드 드로워에 사용

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./assets/pics/home_icone.png')}
  //     />
  //   );
  // };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Home_Stack" component={StackHomeScreen} />
          <Stack.Screen name="User_Stack" component={StackUserScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      // Tab Navigator 연습자료
      // <NavigationContainer>
      //   <Tab.Navigator
      //     initialRouteName="Home"
      //     screenOptions={({route}) => ({
      //       tabBarActiveBackgroundColor: 'skyblue',
      //       tabBarActiveTintColor: 'blue',
      //       tabBarInactiveTintColor: '#fff',
      //       tabBarLabelPosition: 'below-icon', // 라벨의 옆에 나오게 설정
      //       tabBarLabel: route.name, // route를 통해 name값을 받아서 그 네임을 적용
      //       tabBarIcon: ({focused}) => TabBarIcon(focused, route.name), // tabarIcon 함수를 통해 포커스된 대상에 함수 적용
      //       tabBarStyle: {
      //         backgroundColor: '#c6cbef',
      //       },
      //     })}>
      //     <Tab.Screen name="Home" component={TabHomeScreen} />
      //     <Tab.Screen name="User" component={TabUserScreen} />
      //     <Tab.Screen name="Message" component={TabMessageScreen} />
      //   </Tab.Navigator>
      // </NavigationContainer>

      // Drawer 사이드 탭 예시
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerContentOptions={{
      //       activeTintColor: 'red',
      //       activeBackgroundColor: 'skyblue',
      //     }} // 안되는데 이유를 모름 ㄷ;
      //     screenOptions={{
      //       drawerType: 'front', // 화면은 고정하고 옆에서 메뉴가 나오는형태 slide는 drawer가 나온만큼 화면이 옆으로 밀려남
      //       drawerPosition: 'right', // drawer의 나오는 방향을 지정
      //       drawerStyle: {
      //         backgroundColor: '#CEE3F6',
      //         width: 200,
      //       }, // screenOptions 안쪽에다가 drawer 설정을 선언할수 있음 style도 마찬가지
      //     }}
      //     // drawerContent={props => (
      //     //   // eslint-disable-next-line react/jsx-no-undef
      //     // 아이콘이 들어간 사이드 드로워
      //     //   <CustomDrawerContent
      //     //     {...props} // drawerContent는 기본적으로 props을 받기 props을 포함야 하고 함수는 class 밖에 선언해야 한다
      //     //   />
      //     // )}
      //     drawerContent={props => (
      //       // eslint-disable-next-line react/jsx-no-undef
      //       <SideDrawer
      //         {...props} // drawerContent는 기본적으로 props을 받기 props을 포함야 하고 함수는 class 밖에 선언해야 한다
      //       />
      //     )}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={DrawerHomeScreen}
      //       options={{
      //         drawerIcon: () => (
      //           // 이유는 모르겠는데 중괄호로하면 화면에 표시 되지 않음 오류는 없음
      //           <Image source={Pictogram} style={{width: 40, height: 40}} />
      //         ),
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={DrawerUserScreen} />
      //   </Drawer.Navigator>
      // </NavigationContainer>

      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       // Stack.Navigator screenOption을 이용하면 모든 화면에 같은 헤더 스타일을 적용할수 있다
      //       headerStyle: {
      //         backgroundColor: 'orange',
      //       },
      //       headerTintColor: 'red',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: 'purple',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       q
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: props => <LogoTitle />,
      //         //props가 없으면 적용이 안되는데 그 이유를 모르겠음 난중에 물어보던지 해서 확인이 필요
      //         // headerBackTitle을 이용하면 텍스트는 변경이 가능한데 headerTitle 처럼 이미지를 적용하려하면 에러가 나옴
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={() => alert('I am a button!')}
      //             color="gray"
      //           /> // 화면 상단에 오른쪽 버튼을 만듬
      //         ),
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         // Stack.Screen 생성시 먼저 파라미터를 보내줌
      //         // 화면 켜질때 자료 조회가 필요한곳에 사용할듯함
      //         userIdx: 50,
      //         userName: 'Xman',
      //         userLastName: 'park',
      //       }}
      //       options={{
      //         // stack.Navigator에서 전체에 같은 스타일을 맞춰도 따로 options을 먹여서 스타일을 주면 따로 적용한 스타일이 적용된다
      //         //한개만 다른 스타일이 필요할때 사용한다
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'gray',
      //         },
      //         headerTintColor: 'orange',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'darkblue',
      //         },
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
  },
});

export default App;
