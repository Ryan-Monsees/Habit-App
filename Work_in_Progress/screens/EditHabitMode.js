import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Button, Modal, TextInput, Alert, CheckBox} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import AsyncStorage from '@react-native-community/async-storage';
import '../global.js'

import storeData from '../components/StoreData';

//=====================================================
// The screen that displays when adding a habit.
//=====================================================
export default class EditHabitMode extends React.Component {


    constructor(props) {
        super(props);
        

        // Checks to see if we're editting a habit
        // or adding a habit by seeing if we passed
        // the index to this screen.
        let indexCheck, habitNameCheck, habitWeightCheck, habitCountCheck;
        if(props.route.params.index) {
            indexCheck = props.route.params.index;
            habitNameCheck = habits[indexCheck].name;
            habitWeightCheck = habits[indexCheck].weight;
            habitCountCheck = habits[indexCheck].count;
        }
        else {
            indexCheck = -1;
            habitNameCheck = "";
            habitWeightCheck = 1;
            habitCountCheck = 0;
        }
    
        this.state = {
        // Holds the index in the habit array that we're editting.
            index: indexCheck,

            // State for holding the habit name to be added.
            habitName: habitNameCheck,

             // State for holding the weight of the habit.
            // The higher the number, the more points it's worth
            // A negative number is a negative habit that decreases
            // your total score at the end of the day
            habitWeight: habitWeightCheck,

             // State for holding the number of times the habit
            // has been done today
            habitCount: habitCountCheck
        }       
        

        
    } 


    

    
   

    // Handles adding a new habit
    addHabitHandler() {

        habits.push({name: props.name, count: props.count});
    
        storeData.StoreHabits();

     }

    // Handles deleting the selected habit.
    deleteHabit()  {

        habits.splice(this.state.index, 1);
        storeData.StoreHabits();
        this.props.route.params.onGoBack();
        this.props.navigation.goBack();
    }


 


    // Calls the function from EditHabit.js
    // to cancel adding a habit.
    cancelHabit() {
        
        
        
        
        // Clears input.
        this.setState({habitName: ""});
        this.props.route.params.onGoBack();
        this.props.navigation.goBack();
     }


    // Changes the TextInput to the entered text.
    inputHandler(enteredText) {
        console.log("updating text to: " + enteredText);
    this.setState({habitName: enteredText});
    };

    // Handles adding a habit once the user hits add
    addHabit() {

        let habitNameCheck = this.state.habitName;
        console.log("habitNameCheck: " + habitNameCheck);
        
        // Checks to make sure it's only characters and spaces.
        if(/\S/.test(habitNameCheck) && habitNameCheck != '' &&
        habitNameCheck[habitNameCheck.length-1] != ' ' &&
        habitNameCheck.length <= 50) {     
            
            // Removes multiple spaces and adds it to the array.
            habits.push({   name: habitNameCheck.replace(/\s+/g, " "), 
                            weight: 0,      
                            count: 0});

            
            // Clears input.
            this.setState({habitName: ""});
            this.props.route.params.onGoBack();
            this.props.navigation.goBack();
        }
        // What it displays if the input is invalid
        else {
            if(habitNameCheck.length <= 50)
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


    render() {
        return(
        <View>
            {/* Where you enter a new goal. */}
            <TextInput
            placeholder="Enter name of habit"
            style={styles.textInput}
            onChangeText={enteredText => this.inputHandler(enteredText)}
            value={this.state.habitName}
            />


        {/* Button to confirm adding a new habit */}
        <Button
            title="ADD"
            onPress={() => this.addHabit()} />

        <Button
            title="DELETE"
            onPress={() => this.deleteHabit()} />

        {/* Button to cancel adding a new habit */}
        <Button 
            title="CANCEL"
            onPress={() => this.cancelHabit()} />

        </View>
        );
    }



    }

    // gets the height and width of the screen for
    // accurately sized components.
    let { height, width } = Dimensions.get('window');

    EStyleSheet.build({ $rem: width / height });
    
    const styles = EStyleSheet.create({
        
        textInput: {
                padding: 100
        }
    });
