import React, {useRef} from 'react';
import { LogBox, StyleSheet, Text, View} from 'react-native';


import HomeStack from './routes/homeStack';
import AsyncStorage from '@react-native-community/async-storage';
import './global.js'

import * as SQLite from 'expo-sqlite';




// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  
  // Runs once when the app starts
  componentDidMount() {
    
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
    


    this.getDate();

  }
 
  
  
  /*  
      Gets the current date. If the current date is different
      from the saved currDate, it updates the prevDate to be 
      currDate and then makes currDate the current date.
  */
  getDate = async() => {
    
    
    
     try {
        
        // Gets the current date
        const date = (new Date().getMonth() + 1) + " " +
        new Date().getDate() + " " +
        new Date().getFullYear();

        // Gets the list of habits
        const array = await AsyncStorage.getItem('array') || '[]';
        habits = JSON.parse(array);

        // gets the stored dates and stores them in global variables
        const storedPrevDate = await AsyncStorage.getItem('prevDate') || "";
        const storedCurrDate = await AsyncStorage.getItem('currDate') || "";
        prevDate = storedPrevDate;
        currDate = storedCurrDate;

        // Checks to see if currDate is accurate or empty
        if(currDate == "" || date != currDate)
        {
          prevDate = currDate;
          currDate = date;
        }

      // Stores the accurate dates
      await AsyncStorage.setItem('prevDate', prevDate);
      await AsyncStorage.setItem('currDate', currDate);
        
      console.log("current prevDate: " + prevDate);
      console.log("current currDate: " + currDate);

     }  catch(err) {
       console.log(err);
     }
    
     
     
    

    }



// Renders the HomeStack for navigation
render() {
  return (
  <HomeStack/>
  );
};
};



