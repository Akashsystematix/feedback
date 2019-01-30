import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Home from './components/Home'
import Login from './components/Login';
import AuthLoading from './AuthLoading' ;
import Images_common from './common/utils';
const AppStack = createStackNavigator(
  {
    Home: { screen: Home }
  },

);


const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
);

const Switchstack = createSwitchNavigator(
  {
    AuthLoading:{screen :AuthLoading},
    AuthStack: { screen: AuthStack },
    AppStack: { screen: AppStack },

  },
  {
    initialRouteName: 'AuthLoading',
  }
)

const AppContainer = createAppContainer(Switchstack);

export default class AppNavigation extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
