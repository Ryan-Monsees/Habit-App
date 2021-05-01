import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import global from '../global';


EStyleSheet.build({ $rem: sWidth / sHeight });





/* 
Props for the button are:
    color= button color
    buttonWidth= percentage of screen width
    buttonHeight= percentage of screen height
    text= What to display inside the button
    navigation= The navigation component needed to navigate to a new screen
    navigateTo= Which screen to navigate to
    parameters= variables to pass to the next screen
 */
export default function ButtonNav(props) {


    // Checks if there are parameters to pass to the next
    // screen before navigating
    const checkParams = () => {
        if(props.parameters)
        {
            props.navigation.navigate(props.navigateTo, props.parameters);
        }
        else
        {
            props.navigation.navigate(props.navigateTo);
        }
        
    }
    

    return (
        // Sets up the button so when it's pressed it navigates to the parameter "naviateTo" 
        <TouchableOpacity onPress={checkParams} 
                                            >

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
        // Uses dynamic font sizes based on screen size
        fontSize: '30rem',
        textAlign: 'center',
        color: 'white'

    },


    button: {
        // Sets the width, height, and color based on the parameters
        width: sWidth * props.buttonWidth,
        height: sHeight * props.buttonHeight,
        backgroundColor: buttonColor,
        alignItems: 'center',
        justifyContent: 'center',

    },



});



