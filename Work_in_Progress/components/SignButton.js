import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


// Component for the buttons to change the weight of a habit
export default function SignButton(props) {
    
    return (

        <View style={styles(props).signButton}>
            <Text style = {styles(props).signButtonText}>
                {props.sign}
            </Text>
        </View>


    );

}

const styles = (props) => EStyleSheet.create({

    signButton: {
        height: '50%',
        width: sWidth*.15,
        backgroundColor: props.color,
        justifyContent: 'center'
    },

    signButtonText: {
        textAlign: 'center',
    },


});