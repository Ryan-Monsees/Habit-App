import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const Exercise = props => {

    return (
        
        <TouchableOpacity>
            
            {/* Styles and displays the goals */}
            <View>
                
                {/* Displays the name */}
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    ); 


}

export default Exercise;