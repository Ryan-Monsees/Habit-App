import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';


const Workout = props => {
    return (
        <View style={styles.container}>
            {/* Background */}
            <ImageBackground
                source={require('../assets/Clouds.jpg')}
                style={styles.imageBackground}
            >
                <Text style={styles.title}>
                    Workout
                    </Text>
            </ImageBackground>

            <View style={styles.buttonRow}>

                {/* Premade navigation button */}
                <ButtonNav
                    color='lightblue'
                    buttonWidth={.2}
                    buttonHeight={.1}
                    text="Habit List"
                    navigation={props.navigation}
                    navigateTo="Habit List"
                />

            </View>


        </View>
    );
}


let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / height });

const styles = EStyleSheet.create({

    container: {
        width: width,
        height: height
    },

    imageBackground: {
        width: width,
        height: height * .25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: '150rem',
       
    },

    buttonRow: {
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },

});



export default Workout;