import React, { useEffect, useState } from 'react';
import { BackHandler, View, Text, StyleSheet, Dimensions, Button, Modal, TextInput, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const AddHabit = props => {

    const cancelHabit = () => {
        props.cancelHabitHandler();
     }

    

       
     
    const [habitName, setHabitName] = useState('');

    // Changes the TextInput to the entered text
    const inputHandler = (enteredText) => {
    setHabitName(enteredText);
    };

    const addHabit = () => {


        // Checks to make sure it's only characters and spaces
        if(/\S/.test(habitName) && habitName != '' && habitName[habitName.length-1] != ' ') {     
            
            // Removes multiple spaces and adds it to the array
            props.addHabitHandler(habitName.replace(/\s+/g, " "));

            
            // Clears input
            setHabitName('');
        }
        else {
            Alert.alert(
                'Invalid input',
                'Must contain only characters and spaces',
                [
                    {
                        text: 'Ok'
                    }
                    
                ]
            );
        }
        



        
    }

return(
    <Modal visible={props.isVisible} animationType="slide">
        {/* Where you enter a new goal */}
        <TextInput
          placeholder="Enter name of habit"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={habitName}
        />


       
    <Button
        title="ADD"
        onPress={addHabit} />

    <Button 
        title="CANCEL"
        onPress={cancelHabit} />

    </Modal>

);
    }


    let { height, width } = Dimensions.get('window');
    EStyleSheet.build({ $rem: width / height });
    
    const styles = EStyleSheet.create({
        
        textInput: {

        }
    });
export default AddHabit;