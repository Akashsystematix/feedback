import React, { Component } from 'react'
import {
    Text, View,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView, Dimensions,
} from 'react-native'
import styles from '../common/styles';




export default class Home extends Component {


 

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            
        }
        this.handleChangeName = this.handleChangeName.bind(this);
  

    }
    handleChangeName(e) {
        this.setState({
            name: e.nativeEvent.text,

        });
    }
    

   

    render() {
        return (
            <View style={styles.container}>

                    <StatusBar barStyle="light-content" />
                    <KeyboardAvoidingView behavior='padding' style={styles.container}>

                        <View style={styles.infoContainer}>

                            
                            
                            
                           

                        </View>
                        <View>
                            
                        </View>



                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.registrationNavigate}

                    >
                        <Text style={styles.buttonText}>LOGOUT</Text>
                    </TouchableOpacity>
            </View>
        )
    }


    registrationNavigate() {
        this.props.navigation.navigate('AuthStack')
  
      }
}