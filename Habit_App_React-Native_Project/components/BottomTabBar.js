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

            
        </View>
    );    
}

const styles = (props) => EStyleSheet.create({
    container: {
       
        flex: 1,
        justifyContent: 'flex-end',
        
        
    },

    tabBar: {
        height:  sHeight * .1,
        width: sWidth,
        
        backgroundColor: 'red',
        
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center'
    },

   

})