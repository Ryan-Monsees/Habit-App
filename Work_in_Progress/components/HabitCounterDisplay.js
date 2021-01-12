import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ScreenStackHeaderRightView } from 'react-native-screens';

import StoreData from './StoreData';
import '../global.js';
//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {

    
  
    return (
    
        <View style = {styles.habitContainer}> 

            
            <TouchableOpacity 
            style = {styles.countMinus}
            onPress={() => {    
                                habits[props.index].count--; 
                                props.update(props.index);
                                StoreData.StoreHabits(); }}>
                <View>
                    <Text style = {styles.countText}>
                        -
                    </Text>
                </View>
            </TouchableOpacity>
                
            <View style = {styles.name}>
                 {/* Displays the name */}
                 <Text style = {styles.habitText}>
                    {habits[props.index].name}
                </Text>

                {/* Displays the count */}
                <Text style = {styles.habitText}>
                    {habits[props.index].count}
                </Text>
            </View>

        
            
            <TouchableOpacity 
            style = {styles.countPlus}
            onPress={() => {    habits[props.index].count++; 
                                props.update(props.index);
                                StoreData.StoreHabits(); }}>
                <View>
                    <Text style = {styles.countText}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
           
               
          
        </View>
 
    ); 


}

const styles = EStyleSheet.create({
    
    weightText: {
        
            textAlign: 'center',
            
           
    },

    name: {
        flex: 3,
        backgroundColor: 'green',
        height: '100%',
        justifyContent: 'center'
    },

    countPlus: {
        flex: 1,
        height: '100%',
        backgroundColor: 'cyan',
        justifyContent: 'center',
    },

    countText: {
        textAlign: 'center',
        fontSize: '50rem'
    },

    countMinus: {
        flex: 1,
        height: Math.round(sHeight*.15),
        backgroundColor: 'rgb(255, 100, 0)',
        justifyContent: 'center',
    },

    habitContainer: {  
        flex: 1, 
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