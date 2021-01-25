import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import '../global';

export default function BottomTabBar(props) {
    
    return(
        <View style = {styles().container}>
            <View style={styles().tabBar}>
                <Text style = {styles().text}>
                    Tab bar
                </Text>
            </View>

            <View style={styles().padding}>
                <Text/>
            </View>
        </View>
    );    
}

const styles = (props) => EStyleSheet.create({
    container: {
       position: 'absolute',
        
        
        top: sHeight*.7
        
    },

    tabBar: {
        flex: 1,
        height:  Math.round(sHeight * .1),
        width: sWidth,
        backgroundColor: 'red',
        
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    },

    padding: {
        flex: 1,
        backgroundColor: 'red'
    }

})