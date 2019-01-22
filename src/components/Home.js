import React, { Component } from 'react'
import {
    StyleSheet, Text, View,
    StatusBar,
    AsyncStorage,
    TextInput, SafeAreaView, TouchableOpacity,
    KeyboardAvoidingView, Dimensions,
} from 'react-native'



export default class Home extends Component {


    static navigationOptions = {
        title: "Registration"
    };


    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            emailVal: true,
            password: '',
            number: '',
            date: "2016-05-15",
            errorMessage: null
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleRegister = this.handleRegister.bind(this);


    }
    handleChangeName(e) {
        this.setState({
            name: e.nativeEvent.text,

        });
    }
    handleChangeEmail(e) {
        this.setState({
            email: e.nativeEvent.text,

        });
    }
    handleChangePassword(e) {
        this.setState({
            password: e.nativeEvent.text,

        });
    }
    handleChangeNumber(e) {
        this.setState({
            number: e.nativeEvent.text,

        });
    }




    handleRegister() {
        let userdata = {
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            password: this.state.password,
            date: this.state.date,


        }
        addUserData(userdata);
        this.handleSignUp();

    }



    handleSignUp() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }))
             console.log("usersignup" + JSON.stringify(user))

    }

    validate(text, type) {
        alph = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if (type == 'email') {
            if (alph.test(text)) {

                this.setState({
                    emailVal: true,
                })

            } else {
                this.setState({
                    emailVal: false,
                })
                console.warn("invalid email")
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>

                    <StatusBar barStyle="light-content" />
                    <KeyboardAvoidingView behavior='padding' style={styles.container}>

                        <View style={styles.infoContainer}>

                            <TextInput style={styles.input}
                                placeholder="Name"
                                value={this.state.name}
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='default'
                                returnKeyType='next'
                                autoCorrect={false}
                                onChange={this.handleChangeName}

                            />
                            <TextInput style={[styles.input, !this.state.emailVal ? styles.error : null]}
                                onChangeText={(text) => this.validate(text, 'email')}
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChangeEmail}

                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='email-address'
                                returnKeyType='next'
                                autoCorrect={false}

                            />
                            <TextInput style={styles.input}
                                placeholder="Number"
                                value={this.state.number}
                                onChange={this.handleChangeNumber}

                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType='numeric'
                                returnKeyType='next'

                                autoCorrect={false}
                            />
                           

                            <TextInput style={styles.input}
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChangePassword}

                                placeholderTextColor='rgba(255,255,255,0.8)'
                                returnKeyType='go'
                                secureTextEntry
                                autoCorrect={false}
                            />
                        </View>
                        <View>
                            <Text />
                            {this.state.errorMessage &&
                                <Text style={{ color: 'red' }}>
                                    {this.state.errorMessage}
                                </Text>}
                        </View>



                    </KeyboardAvoidingView>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.handleRegister}

                    >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
    },


    infoContainer: {

        top: '5%',
        justifyContent: 'center',
        borderColor: "black",
        padding: 10,
        paddingVertical: 10


    },
    input: {
        borderColor: 'blue',
        borderWidth: 1,
        color: '#302b63',
        fontSize: 20,

        fontWeight: "500",
        marginTop: 10,
        opacity: 1,

    }, dateInput: {
        alignSelf: 'center', color: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        width: 355,
        fontSize: 10,
        marginTop: 10,
    },

    error: {

        borderWidth: 3,
        borderColor: 'red'


    },
    buttonContainer: {
        backgroundColor: '#646FA4',
        paddingVertical: 10,
        left: 0,
        right: 0,
        bottom: 0

    },
 
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }
})