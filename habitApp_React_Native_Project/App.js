import React, {useRef} from 'react';
import { YellowBox } from 'react-native';


import HomeStack from './routes/homeStack';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './global.js';

import Header from './components/Header';


import RNCalendarEvents from "react-native-calendar-events";


import storeData from './components/StoreData';




// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  constructor(props) {
    super(props);
    
  }

  // Runs once when the app starts
  componentDidMount() {

    YellowBox.ignoreWarnings([
      'Non-serializable values were found in the navigation state',
    ]);
    
    this.getData();
    this.googleCalendarPermission();
  }

 
  googleCalendarPermission = () => {

    RNCalendarEvents.requestPermissions((readOnly = false));
    

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
        const date = (new Date().getMonth() + 1) + "/" +
        new Date().getDate()+1 + "/" +
        new Date().getFullYear();

        // Gets the list of habits
        const array = await AsyncStorage.getItem('array') || '[]';
        habits = JSON.parse(array);

        
        

        // gets the stored dates and stores them in global variables
        
        const storedCurrDate = await AsyncStorage.getItem('lastDate') || "";
        lastDate = storedCurrDate;

        // Checks to see if lastDate is accurate or empty
        if(date != lastDate)
        {
          // ======================================================
          // Add event to Google Calendar to add habits array
          //=======================================================


          lastDate = date;
              

          for(var i = 0; i < habits.length; i++)
          {
            habits[i].count = 0;
          }
          
          storeData.StoreHabits();
        }

      // Stores the accurate dates
      await AsyncStorage.setItem('lastDate', lastDate);
        

      
      console.log("first element: " + prevHabits[0]);
      console.log("first date: " + prevHabits[0][0]);
      console.log("first array: " + prevHabits[0][1]);
      
      for(i = 0; i < prevHabits.length; i++)
      {
        console.log("index " + i + " date: " + prevHabits[i][0]);
      }
      
      

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



