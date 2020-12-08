import React, {useRef} from 'react';
import { StyleSheet, Text, View, YellowBox} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import HomeStack from './routes/homeStack';
import AsyncStorage from '@react-native-community/async-storage';
import './global.js'

import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';

import * as SQLite from 'expo-sqlite';

import ApiCalendar from 'react-google-calendar-api';

YellowBox.ignoreWarnings([
  'Require cycle:'
]);

// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  componentDidMount() {
      
    this.getDate();

   

   

  }
 
  

  getDate = async() => {
    
    
    
     try {
        
        // Gets the current date
        const date = (new Date().getMonth() + 1) + " " +
        new Date().getDate() + " " + 
        new Date().getFullYear();

        // Gets the list of habits
        const array = await AsyncStorage.getItem('array') || '[]';
        habits = JSON.parse(array);

        // gets the stored dates
        const storedPrevDate = await AsyncStorage.getItem('prevDate') || "";
        const storedCurrDate = await AsyncStorage.getItem('currDate') || "";
        prevDate = storedPrevDate;
        currDate = storedCurrDate;

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

  constructor() {
    super();


  }


  
render() {
  return (
  <HomeStack/>
  );
};
};


    

const styles = EStyleSheet.create({
  screen : {
    flex: 1,
  }
});


