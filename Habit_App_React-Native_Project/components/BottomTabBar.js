import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import TabButton from './TabButton';
import '../global';

export default function BottomTabBar(props) {
    
    return(
    
        <View style = {styles().container}>
            <View style={styles().tabBar}>
                <TabButton 
                    navigation={props.navigation} 
                    navigateTo="Edit Habits"
                    text="Edit"
                />
                <TabButton 
                    navigation={props.navigation} 
                    navigateTo="Habit Counter"
                    text="Track"
                />
            </View>

            
        </View>
    
    );    
}

const styles = (props) => EStyleSheet.create({
    

    container: {
        
        justifyContent: 'flex-end',
        flex: 1,
        
        
        
    },

    tabBar: {
       
        height:  sHeight * .1,
        width: sWidth,
        
        backgroundColor: sec,
        
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },

    tabButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
    },

    text: {
        textAlign: 'center'
    },

   

})