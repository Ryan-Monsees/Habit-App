import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { debug } from 'react-native-reanimated';

import ButtonNav from '../components/ButtonNav';
import HabitEditDisplay from '../components/HabitEditDisplay';

import AsyncStorage from '@react-native-community/async-storage';

import storeData from '../components/StoreData';





//============================================================
// Where you edit the list of habits
//============================================================
export default class EditHabits extends React.Component {


    constructor(props) {
      super(props);

     

      this.state = {
        habitsArray: habits
        
      }       
      
      
  }
  
  updateHabits() {
    this.setState({habitsArray: habits});
   
  }
  
  
render() {
  return (
    <View style={styles.MainContainer}>


      

      {/* The screen that only appears when adding a new habit */}
       <ButtonNav        
          color= 'red'
          buttonWidth= {.2}
          buttonHeight= {.1}
          text= "Add new habit"
          navigation= {this.props.navigation}
          navigateTo= "Edit Habit Mode"
          parameters= {{index: -1, onGoBack: () => this.updateHabits()}}
         />
          
        <View>
 
      {/* Displays the list of habits */}
        { this.state.habitsArray.map((item, index)=>(
          // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("Edit Habit Mode", {index: index, onGoBack: () => this.updateHabits()})}
                            key= {index}>
          <HabitEditDisplay 
                  index= {index}
                  name= {item.name}
                  count= {item.count}
                  navigation= {this.props.navigation}
          />
          </TouchableOpacity>
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

