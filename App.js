import React, { Component } from 'react';
import AppNavigation from './src/AppNavigation'
import firebase from 'firebase'

global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAkw-T8skKOCT2h5y86qL_oZ2YNumZjXcA",
    authDomain: "feedback-30f79.firebaseapp.com",
    databaseURL: "https://feedback-30f79.firebaseio.com",
    projectId: "feedback-30f79",
    storageBucket: "feedback-30f79.appspot.com",
    messagingSenderId: "26374329888"
    })
    }

  render() {

  return (
    <AppNavigation/>
    );
}
}

export default App;