import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


 export default function Header(props) {
        
    return (
        

        <View style={styles.Container}>
            
            <View style = {styles.background}>
           

                {/* Will only show the Back button if the 
                    screen is not the main screen */}     
                {!(props.name == "Better Today"  ||
                props.name == "Edit Habits" ||
                props.name == "Progress" ||
                props.name == "Habit Counter" ||
                props.name == "Todo List") ? (
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => props.navigation.goBack()}>
                            <View style={styles.backButtonView}>
                                <Text style={styles.backButtonText}>
                                    Back
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : null}



                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {props.name}
                    </Text>
                </View>
            </View>

            
           
        </View>
    );
}

const styles = EStyleSheet.create({

    Container: {
        height: Math.round(sHeight * .15),
        width: sWidth,
        
    },

    

    background: {
        backgroundColor: 'rgb(0, 0, 50)',
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end'
    },

    backButton: {
        flex: 0,
        width: sWidth * .1,
        height: sHeight * .05,
    },

    backButtonView: {

        backgroundColor: sec,
        height: sHeight * .05,
        alignItems: 'center',
        justifyContent: 'center',

    },

    backButtonText: {
        color: 'white',
        textAlign: 'center',
    },

    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: '100rem'
        
    },




});