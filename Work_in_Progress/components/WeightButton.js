import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


// Component for the buttons to change the weight of a habit
export default function WeightButton(props) {
    
    return (

        <View style={styles(props).weightButton}>
            <Text style = {styles(props).weightButtonText}>
                {props.number}
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
    },


});