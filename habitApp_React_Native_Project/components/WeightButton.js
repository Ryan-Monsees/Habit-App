import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Checks if the weight is positive so it will add a '+' sign to it
const check = props => {
    if(props > 0) {
        return (
            '+' + props
        );
    }
    else{
        return(
            props
        );
    }
}

// Component for the buttons to change the weight of a habit
export default function WeightButton(props) {
    
    return (

        <View style={styles(props).weightButton}>
            <Text style = {styles(props).weightButtonText}>
                {check(props.number)}
            </Text>
        </View>


    );

}

const styles = (props) => EStyleSheet.create({

    weightButton: {
        height: '50%',
        width: sWidth*.15,
        backgroundColor: props.color,
        justifyContent: 'center'
    },

    weightButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: '50rem'
    },


});