import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../global.js';
//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {


  
    return (
        <View style = {styles.habitContainer}> 

            <View style = {styles.weight}>
                <Text style = {styles.weightText}>
                    weight
                </Text>
                <Text style = {styles.weightText}>
                    {habits[props.index].weight}
                </Text>
            </View>
                
            <View style = {styles.name}>
                 {/* Displays the name */}
                 <Text style = {styles.habitText}>
                    {habits[props.index].name}
                </Text>
            </View>

            <View style = {styles.count}>
                <Text style = {styles.countText}>
                {habits[props.index].count}
                </Text>
            </View>
               
            
        </View>
    ); 


}

const styles = EStyleSheet.create({
    weight: {
        flex: 1,
        height: Math.round(sHeight*.15),
        backgroundColor: 'purple',
        justifyContent: 'center',
        
        
        

    },

    weightText: {
        
            textAlign: 'center',
            
           
    },

    name: {
        flex: 3,
    },

    count: {
        flex: 1,
        height: '100%',
        backgroundColor: 'cyan',
        justifyContent: 'center',
    },

    countText: {
        textAlign: 'center',
    },

    habitContainer: {  
        flex: 1, 
        backgroundColor: 'green',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',    
    },

    habitText: {
         // Uses dynamic font sizes based on screen size
         fontSize: '30rem',
         textAlign: 'center',
         
    }

});


export default HabitEditDisplay;