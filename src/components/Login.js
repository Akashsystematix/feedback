import React, {Component} from 'react'
import {Image,StatusBar,Text,TextInput,TouchableOpacity,View,
} from 'react-native';
import styles from '../common/styles';


export default class Login extends Component {

  constructor(props) {
    super(props);
     this.state = {
      user: null,
      number: '',
      numberVal: true,
      errorMessage: null
    };
  }
 

  validate(text, type) {
    this.setState({number: text})
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
        console.warn('invalid number')
      }
    }
  }

  

    


  

  render() {
        return (


            <View style={styles.container}>

                    <StatusBar barStyle='light-content' />

                    <View style={styles.logoContainer}>
                      
                        <View style={styles.infoContainer}>
                            <TextInput style={[styles.input, !this.state.numberVal ? styles.error : null]}
                                onChangeText={(text) => this.validate(text, 'number')}
                               
                                placeholder='Mobile Number'
                         placeholderTextColor = 'rgba(255,255,255,0.8)'
                     keyboardType = 'number-pad'
                        returnKeyType = 'next'
                                autoCorrect={
      false}
                            />
                            
                        </View>
                    </View>

                    <View>
                        <Text />
                        {this.state.errorMessage &&
                            <Text style={{color: 'red' }}>
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
    loginNavigate() {
        this.props.navigation.navigate('TodoView')
      }

  }

