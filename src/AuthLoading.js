import React, {Component} from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View,} from 'react-native';
export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.disableYellowBox = true;

    this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };
  render() {

    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
  }});