import React, { Component } from 'react'
import {
  Image, StatusBar, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import styles from '../common/styles';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import DeviceInfo from 'react-native-device-info';
let responseDta = []
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      number: '',
      numberVal: true,
      errorMessage: null,
      fcmToken : ''
    };
  }

// componentWillMount(){
//   const {fcmToken} = this.state;
//   const fcmToken = await firebase.messaging().getToken();
// if (fcmToken) {
//     this.setState({
//       fcmToken:fcmToken
//     })
// } else {
//     // user doesn't have a device token yet
// }
// }


  validate(text, type) {
    this.setState({ number: text })
    alph =
      /^(\+\d{1,3}[- ]?)?\d{10}$/

    if (type == 'number') {
      if (alph.test(text)) {
        // this.setState({ email: text })
        this.setState({
          numberVal: true,

        })

      } else {
        this.setState({
          numberVal: false,
        })
     //   console.warn('invalid number')
      }
    }
  }








  render() {
    if (this.props.user_login != undefined) {
     responseDta = this.props.user_login;
      console.log('responseDta', responseDta)
    }

    return (
      <View style={styles.container}>
        <Image style={styles.loginbg} source={require('../common/resources/login_bg.png')}>
        </Image>
        <StatusBar barStyle='light-content' />

        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('../common/resources/logo_login.png')}>
          </Image>

          <View style={styles.infoContainer}>
            <TextInput style={[styles.input, !this.state.numberVal ? styles.error : null]}
              onChangeText={(text) => this.validate(text, 'number')}
              placeholder='Mobile Number'
              placeholderTextColor='purple'
              keyboardType='number-pad'
              returnKeyType='next'
              maxLength= {10}
              autoCorrect={
                false}
            />

          </View>
        </View>

        <View>
          <Text />
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
        </View>
        <TouchableOpacity style={styles.buttonContainer}
          onPress={() => this.loginNavigate()} >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

      </View>

    )
  }

 
  // ("password",deviceId), //device id 
  // ("fcmId",device_id), // fcm token
  

  loginNavigate() {
    const {number, fcmToken} = this.state;
    const uniqueId = DeviceInfo.getUniqueID();
    console.log('uniw',uniqueId)
    var FormData = require('form-data');
    var form = new FormData();
    form.append('mobile', number);
    form.append('password', uniqueId);
    form.append('isRetry', '0');
    form.append('appVersion','1.0');
    form.append('fcmId', '');
    form.append('osName', 'ios');
    form.append('user_id', '1');

    if(this.state.number != '' && this.state.number.length ==10){
      this.props.login(form, (response) => {
        if (response != undefined && response.data.status == true && response.status ==200) {
          console.log('loginNavigate',response);
       //   alert(JSON.stringify(response))
       let name = response.data.name;
             this.props.navigation.navigate('Home', { name: name})
        }
        else {
         alert(response.data.messaage)
        }
      });
    }
    else{
     if(this.state.number == ''){
       alert('Plaese enter the required field')
     }
     else {
       alert('Please enter valid mobile number with 10 digits.')
     }
    }
   // const data = { mobile:number, password:uniqueId, isRetry:'0',appVersion: '1.0',fcmId: '',osName:'ios', user_id:'1' }

  
  }

}

const mapStateToProps = ({ Logindata, state }) => {
  const { user_login } = Logindata;
  return { user_login };
};

export default connect(mapStateToProps, { login })(Login);
