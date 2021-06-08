import React, { useState } from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../global.js';

 export default function Header(props) {
        

    return (
        

        <View style={styles.Container}>
            
            <View style = {styles.background}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {props.name}
                    </Text>
                </View>
            </View>

            
           
        </View>
    );
}

const styles = EStyleSheet.create({

    Container: {
        height:  '15%',
        width: '100%',
        
    },

    

    background: {
        backgroundColor: 'rgb(0, 0, 50)',
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end'
    },

    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: '100rem'
        
    },




});