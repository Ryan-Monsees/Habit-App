import React from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../global.js';

class StoreData extends React.Component {


    StoreHabits = async() => {
        
            try {
              
              await AsyncStorage.setItem('array', JSON.stringify(habits))
            
            } catch(err) {
              console.log(err);
            }
    }

   

  StoreToDoList = async() => {
    try {
            
      await AsyncStorage.setItem('toDoList', JSON.stringify(toDoList))
    
    } catch(err) {
      console.log(err);
    }
  }

    
}

const storeData = new StoreData();
export default storeData;