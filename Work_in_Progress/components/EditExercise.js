import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Modal, TextInput, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const EditExercise = props => {

    const [exerciseName, setExerciseName] = useState('');

    // Changes the TextInput to the entered text
    const inputHandler = (enteredText) => {
    setExerciseName(enteredText);
    };

    const addExercise = () => {
        // Checks to make sure it's only characters and spaces
        if(/\S/.test(exerciseName) && exerciseName != '' && exerciseName[exerciseName.length-1] != ' ') {     
            
            // Removes multiple spaces and adds it to the array
            props.addExerciseHandler(exerciseName.replace(/\s+/g, " "));

            
            // Clears input
            setExerciseName('');
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
          placeholder="Enter exercise name"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={exerciseName}
        />


       
    <Button
        title="ADD"
        onPress={addExercise} />

    </Modal>

);
    }


    let { height, width } = Dimensions.get('window');
    EStyleSheet.build({ $rem: width / height });
    
    const styles = EStyleSheet.create({
        
        textInput: {

        }
    });
export default EditExercise;