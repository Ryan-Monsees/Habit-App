import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { debug } from 'react-native-reanimated';
import AddHabit from '../components/AddHabit';
import Habit from '../components/Habit';
import AsyncStorage from '@react-native-community/async-storage';
import { InteractionManager } from 'react-native';





export default class EditHabits extends React.Component {


    constructor(props) {
      super(props);

      
     

      this.state = {
        
        isAddMode: false 
      }       
      
      

      

      this.addExerciseHandler = this.addExerciseHandler.bind(this);

      

  }
  
  

  
 
  

 storeData = async() => {
    try {
      
      await AsyncStorage.setItem('array', JSON.stringify(habits))
    
    } catch(err) {
      console.log(err);
    }
  

    }

  
    
 
    




  
  
  


  addExerciseHandler(props) {

    
   
    
    habits.push({name: props, count: 0});
    this.setState({isAddMode: false});

    
    
    this.storeData();
    
  
    
  }
 
  
  
render() {
  return (
    <View style={styles.MainContainer}>
       <TouchableOpacity
            style = {styles.button}
            onPress={() => this.setState({isAddMode: true})}
            >
          <Text>Add</Text>
       </TouchableOpacity>

      


       <AddHabit
          isVisible={this.state.isAddMode}
          addExerciseHandler = {this.addExerciseHandler} />
          
       
        <View>
 
      {/* Displays the list of habits */}
        { habits.map((item, key)=>(

          <Habit  name= {item.name}
                  count= {item.count}
                  key= {key}
          />
          )
          )
        }

</View>
       
 
       
    </View>
  );

  }
}

let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / height });




const styles = EStyleSheet.create({
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 50
    },

});

