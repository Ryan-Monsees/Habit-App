import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


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
          
        <View style = {styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={true}>
          {/* Displays the list of habits */}
          { this.state.habitsArray.map((item, index)=>(
            // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
            <TouchableWithoutFeedback onPress = {() => this.props.navigation.navigate("Edit Habit Mode", {index: index, onGoBack: () => this.updateHabits()})}
                                      key= {index}>
            <View style={styles.habit}>
              <HabitEditDisplay 
                    index= {index}
                    name= {item.name}
                    count= {item.count}
                    navigation= {this.props.navigation}
              />
            </View>
            </TouchableWithoutFeedback>
            )
            )
          }
          </ScrollView>
        </View>

        <View style = {styles.buttonNav}>
        {/* Navigates to Edit Habit Mode. Passes index -1 to indicate new habit */}
        <ButtonNav
                
          color= 'red'
          buttonWidth= {1}
          buttonHeight= {.2}
          text= "Add new habit"
          navigation= {this.props.navigation}
          navigateTo= "Edit Habit Mode"
          parameters= {{index: -1, onGoBack: () => this.updateHabits()}}
         />
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

  MainContainer: {
      flex: 1,
      backgroundColor: 'black',
  },

  habit: {
    flex: 1,
    
    width: width,
    height: .2 * height, 
  },

  scrollView: {
    flex: 4,
    alignItems: 'center',
  },  


  buttonNav: {
    flex: 1,
    alignItems: 'center'
    
  },

  addButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: height * .10
    },

    addButtonText: {
      fontSize: '50rem',
    },

});

