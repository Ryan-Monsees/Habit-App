import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // Contains array of goals
  const [courseGoals, setCourseGoals] = useState([]);

  // Determines whether we are in the add goal screen
  const [isAddMode, setIsAddMode] = useState(false);

  /* Adds the new goal to the list
   "..." pulls out the elements from the 
   old array to add to the new one
   {key: value:} is used instead of enteredGoal because for a 
   Flatlist, you need a key in a object */
  const addGoalHandler = goalName => {

    setCourseGoals(courseGoals => [...courseGoals, { key: courseGoals.length.toString(), value: goalName }]);
    setIsAddMode(false);
  };

  // Cancels the adding of a goal
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  // Removes the goal using filter, which filters out based on the key
  const removeGoalHandler = goalId => {
    setCourseGoals(courseGoals => {
      return (
        courseGoals.filter((goal) => goal.key !== goalId)
      );
    });
  }

  return (
    <View style={styles.screen}>
      {/* Button for adding a goal. If it's pressed, it 
       goes into add goal mode. */}
      <Button
        title="Add new meaningful goal"
        onPress={() => setIsAddMode(true)} />

      {/* handles inputting the new goal.
        isVisible: determines whether to show the screen.
        onAddGoal: will call addGoalHandler which will add a goal
        onCancel: will call cancelGoalHandler which will cancel the goal */}
      <GoalInput
        isVisible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler} />

      {/* Displays the goals
        data: the goals to be displayed
        renderItem: How it renders the goal*/}
      <FlatList
        data={courseGoals}
        renderItem={itemData =>

          /* Calls the GoalItem component to determine how
          it will display.
          itemKey: the goal's unique key
          onDelete: will call removeGoalHandler to delete the goal
          title: the text to display on the screen */
          <GoalItem
            itemKey={itemData.item.key}
            onDelete={removeGoalHandler.bind(this, itemData.item.key)}
            title={itemData.item.value} />} />
    </View>
  );
}

// Style for the screen
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
