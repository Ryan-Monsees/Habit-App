import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Modal, TextInput, Alert, CheckBox, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

import AsyncStorage from '@react-native-community/async-storage';
import '../global.js'

import storeData from '../components/StoreData';
import BackButton from '../components/BackButton';

//=====================================================
// The screen that displays when adding a habit.
//=====================================================
export default class EditHabitMode extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            // Holds the index in the habit array that we're editting.
            index: -1,

            // State for holding the habit name to be added.
            habitName: "",

            // State for holding the weight of the habit.
            // The higher the number, the more points it's worth
            // A negative number is a negative habit that decreases
            // your total score at the end of the day
            habitWeight: 1,

            // State for holding the number of times the habit
            // has been done today
            habitCount: 0,

            isNewHabit: true,

            addOrSave: "ADD"
        }




    }



    componentDidMount() {
        // Checks to see if we're editting a habit
        // or adding a habit by seeing if we passed
        // the index to this screen. If it's -1,
        // We're adding a new Habit
        if (this.props.route.params.index != -1) {
            this.setState({ index: this.props.route.params.index });
            this.setState({ habitName: habits[this.props.route.params.index].name });
            this.setState({ habitWeight: habits[this.props.route.params.index].weight });
            this.setState({ habitCount: habits[this.props.route.params.index].count });
            this.setState({ isNewHabit: false, addOrSave: "SAVE" }); 
        }
    }



    // Handles deleting the selected habit.
    deleteHabit() {

        habits.splice(this.state.index, 1);
        storeData.StoreHabits();
        this.props.route.params.onGoBack();
        this.props.navigation.goBack();
    }

    // Calls the function from EditHabit.js
    // to cancel adding a habit.
    cancelHabit() {

        // Clears input.
        this.setState({ habitName: "" });
        this.props.route.params.onGoBack();
        this.props.navigation.goBack();
    }


    // Changes the TextInput to the entered text.
    inputHandlerName(enteredTextName) {
        this.setState({ habitName: enteredTextName });
    };

    inputHandlerWeight(enteredTextWeight) {
        this.setState({ habitWeight: enteredTextWeight });
    }

    // Handles adding a habit once the user hits add
    addHabit() {

        let habitNameCheck = this.state.habitName;
        let habitWeightCheck = this.state.habitWeight;
        let found = false;
        let checkArray = true;
        let index = this.state.index;
        console.log("habitWeightCheck: " + habitWeightCheck);


        // Checks to see if the new name is different from the old name.
        // If it is the same, we don't check the array for duplicates
        if (index !== -1) {
            if (habits[index].name.toLowerCase() === habitNameCheck.toLowerCase()) {
                checkArray = false;
                console.log("check array false");
            }
        }
        // Checks to see if the habit name is in the array
        if (checkArray) {
            for (var i = 0; i < habits.length; i++) {
                if (habits[i].name.toLowerCase() === habitNameCheck.toLowerCase()) {
                    found = true;
                    break;
                }
            }
        }


        if (found) {

            Alert.alert(
                'Already exists',
                'Try another habit name',
                [
                    {
                        text: 'Ok'
                    }

                ]
            );

        }
        // Checks to make sure it's only characters and spaces.
        else if (!(/\S/.test(habitNameCheck) && habitNameCheck != '' &&
            habitNameCheck[habitNameCheck.length - 1] != ' ')) {

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
        else if (!(habitNameCheck.length <= 50)) {
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
        else {
            // Removes multiple spaces and adds it to the array.
            // If index != -1, we're editing a habit in the array instead. 
            if (this.state.index == -1) {
                habits.push({
                    name: habitNameCheck.replace(/\s+/g, " "),
                    weight: habitWeightCheck,
                    count: 0
                });
            }
            else {
                habits[this.state.index] = {
                    name: habitNameCheck.replace(/\s+/g, " "),
                    weight: habitWeightCheck,
                    count: 0
                };

            }

            // Clears input. Navigates back. onGoBack() updates the EditHabits.js state array
            storeData.StoreHabits();
            this.setState({ habitName: "" });
            this.props.route.params.onGoBack();
            this.props.navigation.goBack();
        }



    }




    render() {
        return (
            <View style={styles.container}>



                <View style={styles.textInputView}>
                    {/* Where you enter a new goal. */}
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        placeholder="Enter name of habit"
                        style={styles.textInput}
                        onChangeText={enteredTextName => this.inputHandlerName(enteredTextName)}
                        value={this.state.habitName}
                    />
                </View>

                {/* Where you set the weight of a habit */}
                <View style={styles.habitWeight}>

                    <View style={styles.currHabitWeightView}>
                        <Text style={styles.currHabitWeightText}>
                            {this.state.habitWeight}
                        </Text>
                    </View>
                    

                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={() => this.setState({ habitWeight: 1 })}>
                            <WeightButton number={1} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ habitWeight: 2 })}>
                            <WeightButton number={2} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ habitWeight: 3 })}>
                            <WeightButton number={3} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ habitWeight: 4 })}>
                            <WeightButton number={4} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ habitWeight: 5 })}>
                            <WeightButton number={5} />
                        </TouchableOpacity>
                    </View>



                </View>


                {/* Button to confirm adding a new habit */}
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.addHabit()} >
                    <View style={styles.addButtonView}>
                        <Text style={styles.addButtonText}>
                            {this.state.addOrSave.toString()}
                        </Text>
                    </View>


                </TouchableOpacity>

                {!this.state.isNewHabit ? (
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => this.deleteHabit()} >
                        <View style={styles.deleteButtonView}>
                            <Text style={styles.deleteButtonText}>
                                DELETE
                    </Text>
                        </View>
                    </TouchableOpacity>
                ) : null}


                {/* Button to cancel adding a new habit */}
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => this.cancelHabit()} >

                    <View style={styles.cancelButtonView}>
                        <Text style={styles.cancelButtonText}>
                            CANCEL
                    </Text>
                    </View>

                </TouchableOpacity>


            </View>
        );
    }



}


EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({

    container: {
        flex: 1,
    },

    textInputView: {

        height: sHeight * .2,
        backgroundColor: 'purple',
        alignItems: 'center'
    },


    habitWeight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'cyan'
    },

    currHabitWeightView: {
        flex: 1,
        height: '50%',
        width: '100%',
        backgroundColor: 'yellow',
        justifyContent: 'center'

    },

    currHabitWeightText: {
        
        textAlign: 'center'
    },

    buttonRow: {
        flex: 1,
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },

    weightButton: {
        height: '50%',
        width: sWidth*.15,
        backgroundColor: 'red',
        justifyContent: 'center'
    },

    weightButtonText: {
        textAlign: 'center',
    },

    textInput: {
        flex: 1,
        height: 200,
        width: 200,
        textAlign: 'center',
        top: '25%'
    },

    addButton: {
        flex: 1,
        backgroundColor: 'blue',
    },

    addButtonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    addButtonText: {
        textAlign: 'center'
    },

    deleteButton: {
        position: 'absolute',
        height: 50,
        width: 50,
        right: 0,
        top: sHeight * .05,
        backgroundColor: 'red',
        flex: 1
    },

    deleteButtonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    deleteButtonText: {
        textAlign: 'center'
    },

    cancelButton: {
        flex: 1,
        backgroundColor: 'rgb(255,255,0)'
    },

    cancelButtonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cancelButtonText: {
        textAlign: 'center'
    },

   


});

// Component for the buttons to change the weight of a habit
function WeightButton(props) {
    return (

        <View style={styles.weightButton}>
            <Text style = {styles.weightButtonText}>
                {props.number}
            </Text>
        </View>


    );

}
