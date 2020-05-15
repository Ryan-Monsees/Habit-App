import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
const GoalInput = props => {

  /* useState for grabbing text for a new goal
   and adding it to the courseGoals in App.js */
  const [enteredGoal, setEnteredGoal] = useState('');

  // Changes the TextInput to the entered text
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  /* Applies the entered goal by calling a function in App.js 
  and clears the text */
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };



  return (
    /* Determines whether the GoalInput screen is visible.
    animationType: How the screen transitions when it becomes visible */
    <Modal visible={props.isVisible} animationType="slide">

     {/* Used to edit the style */}
      <View style={styles.inputContainer}>

        {/* Where you enter a new goal */}
        <TextInput
          placeholder="new meaningful goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        {/* Overall button style */}
        <View style={styles.buttonStyle}>

          {/* Style specific to the button */}
          <View style={styles.buttonSpecific}>

            {/* The cancel button. onPress activates the onCancel prop */}
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel} />
          </View>

          {/* Style specific to the button */}
          <View style={styles.buttonSpecific}>

            {/* The add button. Calls the addGoalHandler when pressed. */}
            <Button
              title="ADD"
              onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {

    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttonSpecific: {
    width: '25%',
  },
});

export default GoalInput;