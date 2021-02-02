import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import global from '../global';
import ToDoList from '../screens/ToDoList';

export default function ToDoItem(props) {

    var check = {
        style: props.index != 0 ? styles().toDoContainer : styles().toDoContainerTopBorder
    }

    return (
        <View {...check}>
            <Text style = {{flex: 1}}>
                {toDoList[props.index].name + " " + toDoList[props.index].difficulty}
            </Text>
        </View>
    );
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = (props) => EStyleSheet.create({

    toDoContainer: {  
        flex: 1, 
        backgroundColor: prim,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row', 
         height: Math.round(sHeight*.10),   
    },

    toDoContainerTopBorder: {  
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
         height: Math.round(sHeight*.10), 
    },
    
   


});
