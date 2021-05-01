import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../global.js';
//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitProgressDisplay = props => {

    var array;
    if(props.array == 'habits')
        array = habits;
    else if(props.array == 'prevHabits')
        array = prevHabits;
  
        var check = {
            style: props.index != 0 ? styles.habitContainer : styles.habitContainerTopBorder
        }

    return (
        <View {...check}> 

            <View style = {styles.weight}>
                <Text style = {styles.weightText}>
                    weight
                </Text>
                <Text style = {styles.weightText}>
                    {array[props.index].weight}
                </Text>
            </View>
                
            <View style = {styles.name}>
                 {/* Displays the name */}
                 <Text style = {styles.habitText}>
                    {array[props.index].name}
                </Text>
            </View>

            <View style = {styles.count}>
                <Text style = {styles.countText}>
                Count :
                </Text>
                <Text style = {styles.countText}>
                {array[props.index].count}
                </Text>
            </View>
               
            
        </View>
    ); 


}

const styles = EStyleSheet.create({
    weight: {
        flex: 1,
        height: Math.round(sHeight*.15),
        backgroundColor: sec,
        justifyContent: 'center',
        
        
        

    },

    weightText: {
        
            textAlign: 'center',
            color: 'white',  
    },

    name: {
        flex: 3,
    },

    count: {
        flex: 1,
        height: '100%',
        backgroundColor: sec,
        justifyContent: 'center',
    },

    countText: {
        textAlign: 'center',
        color: 'white',
    },

    habitContainer: {  
        backgroundColor: prim,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white',
        flex: 1, 
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',    
    },
    habitContainerTopBorder: {  
        backgroundColor: prim,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: 'white',
        flex: 1, 
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',    
    },


    habitText: {
         // Uses dynamic font sizes based on screen size
         fontSize: '30rem',
         textAlign: 'center',
         color: 'white',
         
    }

});


export default HabitProgressDisplay;