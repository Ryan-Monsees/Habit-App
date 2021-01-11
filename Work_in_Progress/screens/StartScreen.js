import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, PixelRatio, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';
import '../global.js';




const StartScreen = props => {


    return (

        <View style={styles.container}>

            




            <View style={styles.buttonRow}>
                <ButtonNav
                    color='lightblue'
                    buttonWidth={.2}
                    buttonHeight={.1}
                    text="Edit Habits"
                    navigation={props.navigation}
                    navigateTo="Edit Habits"
                />

                <ButtonNav
                    color='blue'
                    buttonWidth={.2}
                    buttonHeight={.1}
                    text="Habit Counter"
                    navigation={props.navigation}
                    navigateTo="Habit Counter"
                /> 
                
                <ButtonNav
                color='rgb(255, 100, 0)'
                buttonWidth={.2}
                buttonHeight={.1}
                text="Progress"
                navigation={props.navigation}
                navigateTo="Progress"
            />


                

            </View>

            <View style={styles.buttonRow}>

            </View>


        </View>


    );

};


EStyleSheet.build({ $rem: sWidth / sHeight });




const styles = EStyleSheet.create({

    // Added to style properly based on the screen size
    container: {
        width: sWidth,
        height: sHeight,

    },

    title: {
        fontSize: '100rem',
        color: 'yellow',
        opacity: .5,

    },


    buttonRow: {
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },


});

export default StartScreen;