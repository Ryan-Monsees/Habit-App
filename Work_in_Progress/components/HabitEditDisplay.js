import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {


  
    return (
        <View style = {styles.habit}> 
        
            
            
            <View>
                
                {/* Displays the name */}
                <Text>{props.name + " " + props.count}</Text>
            </View>
        </View>
    ); 


}

const styles = EStyleSheet.create({
    habit: {   
        padding: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        
       
    },

});


export default HabitEditDisplay;