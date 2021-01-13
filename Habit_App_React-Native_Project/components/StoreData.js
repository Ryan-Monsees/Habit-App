import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import '../global.js'

class StoreData extends React.Component {


    StoreHabits = async() => {
        console.log("Storing data...");
            try {
              
              await AsyncStorage.setItem('array', JSON.stringify(habits))
            
            } catch(err) {
              console.log(err);
            }
    }

    StorePrevHabits = async() => {
      console.log("Storing data...");
          try {
            
            await AsyncStorage.setItem('prevArray', JSON.stringify(prevHabits))
          
          } catch(err) {
            console.log(err);
          }
  }

    StoreDay() {
        console.log("FAKER, I'm more real than you!");
    }
}

const storeData = new StoreData();
export default storeData;