import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { debug } from 'react-native-reanimated';
import AddHabit from '../components/AddHabit';
import ExerciseComp from '../components/Exercise';
import AsyncStorage from '@react-native-community/async-storage';





export default class HabitList extends React.Component {


  
    componentDidMount(){
      this.getData();
    }

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

  getData = async() => {
    

    const test = [];
     try {

       await AsyncStorage.getItem('array')
      .then(req => JSON.parse(req))
      .then(json => console.log(json))
      .catch(error => console.log('error!'));
     }  catch(err) {
       console.log(err);
     }
     
     console.log(habits);
     
   

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
 
        { habits.map((item, key)=>(
          <Text key={key} style={styles.TextStyle} > 
          { item.name + " " + item.count } 
          </Text>)
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

