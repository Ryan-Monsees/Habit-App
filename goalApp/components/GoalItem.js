import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        /* If you click on a goal, it will pass the key to the App.js onDelete */
        <TouchableOpacity  onPress={props.onDelete.bind(this, props.itemKey)}>
            
            {/* Styles and displays the goals */}
            <View style={styles.listItem} >
                
                {/* the text to display based on the title parameter */}
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
        
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
});

export default GoalItem;