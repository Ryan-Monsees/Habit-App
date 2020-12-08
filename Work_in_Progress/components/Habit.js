import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const Habit = props => {

    return (
        
        <TouchableOpacity style={styles.habit}>
            
            {/* Styles and displays the goals */}
            <View>
                
                {/* Displays the name */}
                <Text>{props.name + " " + props.count}</Text>
            </View>
        </TouchableOpacity>
    ); 


}

const styles = EStyleSheet.create({
    habit: {
        backgroundColor: 'blue',
        alignItems: 'center',
        
       
    },

});


export default Habit;