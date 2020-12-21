import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {


  
    return (
        <View style = {styles.habit}> 
        
            
            
            {/*<View style = {styles.habitText}> */}
                
                {/* Displays the name */}
                <Text style = {styles.habitText}>
                    {props.name + " " + props.count}
                </Text>
            {/* </View> */}
        </View>
    ); 


}

const styles = EStyleSheet.create({
    habit: {   
        backgroundColor: 'blue',
         alignItems: 'center',
         justifyContent: 'center',    
    },

    habitText: {
         // Uses dynamic font sizes based on screen size
         fontSize: '30rem',
         textAlign: 'center'
    }

});


export default HabitEditDisplay;