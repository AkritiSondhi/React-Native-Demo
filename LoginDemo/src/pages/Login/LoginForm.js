import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, ToastAndroid } from 'react-native';
import CheckBox from 'react-native-check-box';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rememberMe: false,
            userName: '',
            password: '',
        }
    }

    validateInput = () => {
        if(this.state.userName == '' || this.state.password == '') {
            ToastAndroid.show('Credentials cannot be empty', ToastAndroid.SHORT);
            return true;
        }
        return false;
    }

    onLoginPress = () => {
        if (this.validateInput()) {

        }
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.textInputBox} 
                    onChangeText = {(text) => {
                        this.setState({
                            userName: text
                        })
                    }}
                    placeholder = "Username"/>

                <TextInput style = {styles.textInputBox} 
                    onChangeText = {(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                    placeholder = "Password" 
                    secureTextEntry = {true}/>

                <TouchableHighlight style = {styles.loginButton}
                    onPress = {this.onLoginPress}>
                    <Text style = {styles.loginButtonText}>Login</Text>
                </TouchableHighlight>

                <CheckBox style = {styles.checkBox}
                    onClick={() => {
                        this.setState({
                            rememberMe: !this.state.rememberMe
                        })
                    }}
                    isChecked = {this.state.rememberMe}
                    rightText = {"Remember me"} />

                <TouchableHighlight style = {styles.forgotPasswordButton}>
                    <Text style = {styles.forgotPasswordButtonText}>Forgot your Password?</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = LoginForm;

var styles = StyleSheet.create({
    container: {
        margin: 15,
        marginTop: 30,
    },
    textInputBox: {
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#D6DBE1',
        backgroundColor: '#E7EDFF',
        marginTop: 20,
        padding: 10,
        fontSize: 16,
    },
    loginButton: {
        borderRadius: 4,
        backgroundColor: '#FF3E00',
        marginTop: 40, 
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    forgotPasswordButton: { 
        borderRadius: 4,
        backgroundColor: '#DDE8F2',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotPasswordButtonText: {
        color: '#4E4F50',
        fontSize: 16,
    },
    checkBox: {
        marginVertical: 20,
    }

});