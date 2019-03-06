import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <View style = {styles.backgroundContainer}>
                <View style = {styles.container}>
                    <View style = {styles.imageContainer}>
                        <Image resizeMode = "contain" style = {styles.logo} source = {require('../../assets/images/logo.png')} />
                    </View>

                    <View style={styles.formContainer}>
                        <LoginForm/>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = Login;

var styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#172936',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingBottom: 40,
    },
    imageContainer:{
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: 30,
    },
    logo: {
        position: 'relative',
        width: '50%',
    }
});