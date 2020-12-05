import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ScreenChange } from '../App';
import { NavigationHelpersContext } from '@react-navigation/native';

let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / height });





/* 
Props for the button are:
    color= button color
    buttonWidth= percentage of screen width
    buttonHeight= percentage of screen height
    text= What to display inside the button
    navigation= The navigation component needed to navigate to a new screen
    navigateTo= Which screen to navigate to
 */
export default function ButtonNav(props) {


    return (
        // Sets up the button so when it's pressed it navigates to the parameter "naviateTo" 
        <TouchableOpacity onPress={() => props.navigation.navigate(props.navigateTo)}>

            {/* Sets up the styles for the button */}
            <View style={styles(props).button}>
                <Text style={styles(props).buttonText}>
                    {props.text}
                </Text>
            </View>

        </TouchableOpacity>
    );


};





const styles = (props) => EStyleSheet.create({

    buttonText: {
        fontSize: '30rem',
        textAlign: 'center'

    },


    button: {
        // Sets the width, height, and color based on the parameters
        width: width * props.buttonWidth,
        height: height * props.buttonHeight,
        backgroundColor: props.color,
        alignItems: 'center',
        justifyContent: 'center',

    },



});


