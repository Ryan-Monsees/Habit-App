import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//=================================================
// Back button to be used on any screen
//=================================================
export default function BackButton  (props) {
    return(
        <View>
            <TouchableOpacity
                style = {styles.button}
                onPress={() => props.navigation.navigate.goBack()}
            >
                <View style = {styles.buttonView}>
                    
                </View>

            </TouchableOpacity>



            
        </View>
    )
}

let { height, width } = Dimensions.get('window');

const styles = EStyleSheet.create({

    

    buttonView: {
        
        backgroundColor: 'blue',
        height: height * .1,
        width: width * .1
    },

});