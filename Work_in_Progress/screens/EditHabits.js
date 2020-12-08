import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { debug } from 'react-native-reanimated';
import AddHabit from '../components/AddHabit';
import HabitEditDisplay from '../components/HabitEditDisplay';
import AsyncStorage from '@react-native-community/async-storage';
import { InteractionManager } from 'react-native';




//============================================================
// Where you edit the list of habits
//============================================================
export default class EditHabits extends React.Component {


    constructor(props) {
      super(props);

     

      this.state = {
        
        isAddMode: false 
      }       
      
      this.addHabitHandler = this.addHabitHandler.bind(this);
      this.cancelHabitHandler = this.cancelHabitHandler.bind(this);
      this.addHabitMode = this.addHabitMode.bind(this);
      

  }
  
 
  

 storeData = async() => {
    try {
      
      await AsyncStorage.setItem('array', JSON.stringify(habits))
    
    } catch(err) {
      console.log(err);
    }
    }

  // Pulls up the screen to add or edit a habit
  addHabitMode() {
    
    this.setState({isAddMode: true});
  }

  // Handles cancelling the adding of a habit
  cancelHabitHandler() {

    this.setState({isAddMode: false});

  }

  // Handles adding a new habit
  addHabitHandler(props) {

    habits.push({name: props, count: 0});
    this.setState({isAddMode: false});
    this.storeData();

  }
 
  
  
render() {
  return (
    <View style={styles.MainContainer}>

      {/* Button to press to add a new habit */}
       <TouchableOpacity
            style = {styles.addButton}
            onPress={() => this.addHabitMode()}
            >
          <Text style={styles.addButtonText}>
            Add
          </Text>
       </TouchableOpacity>

      

      {/* The screen that only appears when adding a new habit */}
       <AddHabit
          isVisible={this.state.isAddMode}
          addHabitHandler = {this.addHabitHandler} 
          cancelHabitHandler = {this.cancelHabitHandler} />
       
        <View>
 
      {/* Displays the list of habits */}
        { habits.map((item, key)=>(

          <HabitEditDisplay  name= {item.name}
                  count= {item.count}
                  key= {key}
                  addHabitMode = {this.addHabitMode}
          />
          )
          )
        }

</View>
       
 
       
    </View>
  );

  }
}

// Gets the dimesions of the screen for proper sizing in
// the Extended style sheet
let { height, width } = Dimensions.get('window');

EStyleSheet.build({ $rem: width / height });

const styles = EStyleSheet.create({

  addButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: height * .10
    },

    addButtonText: {
      fontSize: '50rem',
    },

});

