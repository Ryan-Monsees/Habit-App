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
        
        
      }       
      
      console.log("ACTIVATE");
  }
  
 
  

 storeData = async() => {
    try {
      
      await AsyncStorage.setItem('array', JSON.stringify(habits))
    
    } catch(err) {
      console.log(err);
    }
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
          parameters= {{index: 1337}}
         />
          
        <View>
 
      {/* Displays the list of habits */}
        { habits.map((item, index)=>(

          <HabitEditDisplay 
                  index= {index}
                  name= {item.name}
                  count= {item.count}
                  key= {index}
                  navigation= {this.props.navigation}
                  
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

