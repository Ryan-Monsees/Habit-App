
import React, {useRef} from 'react';
import {TextInput, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import HomeStack from './routes/homeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './global.js';

import Header from './components/Header';

import storeData from './components/StoreData';

import firebase from './components/Firebase';







// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    
    
  }

  // Runs once when the app starts
  componentDidMount() {

    
    
    this.getData();
    const user = {email: "umm@yahoo.com", password: '123456'};
    
    //firebase.login(user);
    //firebase.signOut();
    //firebase.saveScore();
    
    
    
  }

  



  /*  
     Gathers all the data from local storage. Also gets
     the current date and see if it's different from the 
     stored date, indicating we need to store the 
     current habits array reset it.
  */
  getData = async() => { 
    
    
     try {
        // Gets the current date
        const date = (new Date().getMonth() + 1) + "_" +
        new Date().getDate() + "_" +
        new Date().getFullYear();

        // Gets the list of habits from local storage
        const array = await AsyncStorage.getItem('array') || '[]';
        habits = JSON.parse(array);

        
        
        

        // gets the stored dates and stores them in global variables
        const storedCurrDate = await AsyncStorage.getItem('lastDate') || "";
        lastDate = storedCurrDate;

        // Checks to see if lastDate is accurate or empty
        if(date != lastDate)
        {
          
          

          lastDate = date;
              

          for(var i = 0; i < habits.length; i++)
          {
            habits[i].count = 0;
          }
          
          storeData.StoreHabits();
        }

      // Stores the accurate dates
      await AsyncStorage.setItem('lastDate', lastDate);
        

      
      

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


const styles = EStyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
},


});



