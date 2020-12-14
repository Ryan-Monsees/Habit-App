import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//================================================================
// How each individual habit are displayed when in Habit Edit mode
//=================================================================
const HabitEditDisplay = props => {



    
    /*
        props.navigation.navigate("Edit Habit Mode", {name: props.name, 
                                                    count: props.count})
    */
  
    return (
        <View>
        <TouchableOpacity
            onPress={() => console.log("START" + props.index + ' ')}
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