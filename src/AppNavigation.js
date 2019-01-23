import React, {Component} from 'react'
import {createAppContainer ,createSwitchNavigator,createStackNavigator} from 'react-navigation';

import Home from './components/Home'
import Login from './components/Login'
const AppStack =createStackNavigator(
    {
    
    Home: {screen: Home}
  
   },{
   defaultnavigationOptions: {
    header: null,
  }
}



 );


 const Authstack=createStackNavigator(
{

  Login:{screen:Login},

}


);

const Switchstack=createSwitchNavigator(
{
Authstack:{screen:Authstack},
AppStack:{screen:AppStack},

}
)


  
const AppContainer = createAppContainer(Switchstack);


export default class AppNavigation extends Component {


  render() {

    
    return (
  
    
    <AppContainer/>
    
  
    );
  }
}
