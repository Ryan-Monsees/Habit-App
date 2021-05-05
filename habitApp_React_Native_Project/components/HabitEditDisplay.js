import React, { useState } from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../global.js';
//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {

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
                Count: 
                </Text>
                <Text style = {styles.countText}>
                {habits[props.index].count}
                </Text>
            </View>
               
            
        </View>
    ); 


}

const styles = EStyleSheet.create({
    
    habitContainer: {  
        flex: 1, 
        backgroundColor: prim,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',    
    },

    habitContainerTopBorder: {  
        flex: 1, 
        backgroundColor: prim,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderColor: 'white',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',    
    },
   
   
    weight: {
        flex: 1,
        height: Math.round(sHeight*.15),
        backgroundColor: sec,
        justifyContent: 'center',
    },

    weightText: {
        
        textAlign: 'center',
        color: 'white'         
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
        color: 'white'
    },

    

    habitText: {
         // Uses dynamic font sizes based on screen size
         fontSize: '30rem',
         textAlign: 'center',
         color: 'white',
         
    }

});


export default HabitEditDisplay;