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

    var check = {
        style: props.index != 0 ? styles().habitContainer : styles().habitContainerTopBorder
    }
    
    return (
    
        <View {...check}> 

            
            <TouchableOpacity 
            style = {styles().countMinus}
            onPress={() => {    // Checks to see if the count is greater than 
                                // zero before incrementing and saving  
                               if(habits[props.index].count > 0) {
                                    habits[props.index].count--;
                                    props.update(props.index);
                                    StoreData.StoreHabits();
                               }  
                               }}>
                <View>
                    <Text style = {styles().countText}>
                        -
                    </Text>
                </View>
            </TouchableOpacity>
                
            <View style = {styles().name}>
                 {/* Displays the name */}
                 <Text style = {styles().habitText}>
                    {habits[props.index].name}
                </Text>

                {/* Displays the count */}
                <Text style = {styles().habitText}>
                    {habits[props.index].count}
                </Text>
            </View>

        
            
            <TouchableOpacity 
            style = {styles().countPlus}
            onPress={() => {    habits[props.index].count++;
                                props.update(props.index);
                                StoreData.StoreHabits(); }}>
                <View>
                    <Text style = {styles().countText}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
           
               
          
        </View>
 
    ); 


}

const styles = (props) => EStyleSheet.create({
    
    habitContainer: {  
        flex: 1, 
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',
         backgroundColor: prim,
         borderRightWidth: 1,
         borderLeftWidth: 1,
         borderBottomWidth: 1,
         borderColor: 'white'    
    },

    habitContainerTopBorder: {  
        flex: 1, 
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',
         backgroundColor: prim,
         borderRightWidth: 1,
         borderLeftWidth: 1,
         borderBottomWidth: 1,
         borderTopWidth: 1,
         borderColor: 'white'    
    },



    weightText: {
        
            textAlign: 'center',
            
           
    },

    name: {
        flex: 3,
        backgroundColor: prim,
        height: '100%',
        justifyContent: 'center'
    },

    countPlus: {
        flex: 1,
        height: '100%',
        backgroundColor: sec,
        justifyContent: 'center',
    },

    countText: {
        textAlign: 'center',
        fontSize: '50rem',
        color: 'white'
    },

    countMinus: {
        flex: 1,
        height: Math.round(sHeight*.15),
        backgroundColor: sec,
        justifyContent: 'center',
    },

    habitText: {
         // Uses dynamic font sizes based on screen size
         fontSize: '30rem',
         textAlign: 'center',
         color: 'white',
         
    }

   

});


export default HabitEditDisplay;