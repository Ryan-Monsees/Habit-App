import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import global from '../global';


EStyleSheet.build({ $rem: sWidth / sHeight });


export default function TabButton(props) {


    return (
        <View style={styles().container}>
           
            <TouchableOpacity onPress={() => props.navigation()} 
                                                >

                {/* Sets up the styles for the button */}
                <View style={styles(props).background}>
                    <Text style={styles(props).buttonText}>
                        {props.text}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    );

}

const styles = (props) => EStyleSheet.create({

    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
    },
    
    background: {
        height: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        // Uses dynamic font sizes based on screen size
        fontSize: '25rem',
        color: 'white'

    },


    button: {
        // Sets the width, height, and color based on the parameters
     
        backgroundColor: buttonColor,
        alignItems: 'center',
        justifyContent: 'center',

    },



});




