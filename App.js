import React, { Component } from 'react';
import AppNavigation from './src/AppNavigation'
import firebase from 'firebase'

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDKrryvH-8Rf-JfWU67M92VObzZLcOUaOA",
      authDomain: "feedback-f289a.firebaseapp.com",
      databaseURL: "https://feedback-f289a.firebaseio.com",
      projectId: "feedback-f289a",
      storageBucket: "",
      messagingSenderId: "8804815284"
    })
    }

  render() {

  return (
    <AppNavigation/>
    );
}
}

export default App;