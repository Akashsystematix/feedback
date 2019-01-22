import React, {Component} from 'react'
import {createAppContainer ,createStackNavigator} from 'react-navigation';

import Home from './components/Home'
import Login from './components/Login'
const AppStack =createStackNavigator(
    {
      Login:{screen:Login},
    Home: {screen: Home}
  
   },
    
    {
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E8CBC0'
        
        }
     }
    }
    
    
    );
  
const AppContainer = createAppContainer(AppStack);


export default class AppNavigation extends Component {


  render() {

    
    return (
  
    
    <AppContainer/>
    
  
    );
  }
}
