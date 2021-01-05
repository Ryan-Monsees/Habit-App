import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, PixelRatio, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';





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

                

            </View>

            <View style={styles.buttonRow}>

            </View>


        </View>


    );

};

let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / height });




const styles = EStyleSheet.create({

    // Added to style properly based on the screen size
    container: {
        width: width,
        height: height,

    },

    title: {
        fontSize: '100rem',
        color: 'yellow',
        opacity: .5,

    },

    imageBackground: {
        width: width,
        height: height * .25,
        justifyContent: 'center',
        alignItems: 'center'
    },


    buttonRow: {
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },


});

export default StartScreen;