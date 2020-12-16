import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Button, Modal, TextInput, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import AsyncStorage from '@react-native-community/async-storage';
import '../global.js'

import storeData from '../components/StoreData';

//=====================================================
// The screen that displays when adding a habit.
//=====================================================
const EditHabitMode = props => {

  

    // Checks to see if we're editting a habit
    // or adding a habit by seeing if we passed
    // the index to this screen.
    let indexCheck;
    if(props.route.params) {
        indexCheck = props.route.params.index;
    }
    else {
        indexCheck = -1;
    }
    
    // Holds the index in the habit array that we're editting.
    const index = indexCheck;
    
    

    // State for holding the habit name to be added.
    const [habitName, setHabitName] = useState('');

    // State for holding the weight of the habit.
    // The higher the number, the more points it's worth
    // A negative number is a negative habit that decreases
    // your total score at the end of the day
    const [habitWeight, setHabitWeight] = useState(1);

    // State for holding the number of times the habit
    // has been done today
    const [habitCount, setHabitCount] = useState(0);

    // functional component version of ComponentDidMount
    // Will execute when this component opens 
    useEffect(() => {
        
        

        if(index != -1)
        {
           //setHabitName(habits[index].name);
           
        }
        
       });



    
    // Stores the updated information in local storage
    const storeData = async() => {
        try {
          
          await AsyncStorage.setItem('array', JSON.stringify(habits))
        
        } catch(err) {
          console.log(err);
        }
        }

    // Handles adding a new habit
    const addHabitHandler = (props)  => {

        habits.push({name: props.name, count: props.count});
    
        this.storeData();

     }

    // Handles deleting the selected habit.
    const deleteHabit = () => {

        habits.splice(index, 1);
        props.navigation.goBack();
    }


 


    // Calls the function from EditHabit.js
    // to cancel adding a habit.
    const cancelHabit = () => {
        
        
        
        
        // Clears input.
        setHabitName('');
     }


    // Changes the TextInput to the entered text.
    const inputHandler = (enteredText) => {
    setHabitName(enteredText);
    };

    // Handles adding a habit once the user hits add
    const addHabit = () => {


        // Checks to make sure it's only characters and spaces.
        if(/\S/.test(habitName) && habitName != '' &&
        habitName[habitName.length-1] != ' ' &&
        habitName.length <= 50) {     
            
            // Removes multiple spaces and adds it to the array.
            props.addHabitHandler({ name: habitName.replace(/\s+/g, " "), 
                                    count: 0});

            
            // Clears input.
            setHabitName('');
        }
        // What it displays if the input is invalid
        else {
            if(habitName.length <= 50)
            Alert.alert(
                'Invalid input',
                'Must contain only characters and spaces',
                [
                    {
                        text: 'Ok'
                    }
                    
                ]
            );
            else
            Alert.alert(
                'Invalid input',
                'Too long! Make it clear and concise',
                [
                    {
                        text: 'Ok'
                    }
                    
                ]
            );

        }
        



        
    }

return(
    <View>
        {/* Where you enter a new goal. */}
        <TextInput
          placeholder="Enter name of habit"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={habitName}
        />


    {/* Button to confirm adding a new habit */}
    <Button
        title="ADD"
        onPress={addHabit} />

    <Button
        title="DELETE"
        onPress={deleteHabit} />

    {/* Button to cancel adding a new habit */}
    <Button 
        title="CANCEL"
        onPress={cancelHabit} />

    </View>

);
    }

    // gets the height and width of the screen for
    // accurately sized components.
    let { height, width } = Dimensions.get('window');

    EStyleSheet.build({ $rem: width / height });
    
    const styles = EStyleSheet.create({
        
        textInput: {

        }
    });
export default EditHabitMode;