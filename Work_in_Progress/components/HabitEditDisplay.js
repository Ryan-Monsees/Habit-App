import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//============================================================
// How each individual are displayed when in Habit Edit mode
//============================================================
const HabitEditDisplay = props => {

  
    return (
        <View>
        <TouchableOpacity
            onPress={() => props.addHabitMode()} 
            style={styles.habit}>
            
            
            <View>
                
                {/* Displays the name */}
                <Text>{props.name + " " + props.count}</Text>
            </View>
        </TouchableOpacity>
        </View>
    ); 


}

const styles = EStyleSheet.create({
    habit: {
        backgroundColor: 'blue',
        alignItems: 'center',
        
       
    },

});


export default HabitEditDisplay;