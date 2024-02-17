//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../../assets/7596625';

// create a component
const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MyComponent</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SigninScreen;
