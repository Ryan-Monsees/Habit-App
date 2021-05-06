
import React, {useRef} from 'react';
import { YellowBox, TextInput, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import HomeStack from './routes/homeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './global.js';

import Header from './components/Header';

import storeData from './components/StoreData';







// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    
    this.state = {
        user: null
    }
  }

  // Runs once when the app starts
  componentDidMount() {

    YellowBox.ignoreWarnings([
      'Non-serializable values were found in the navigation state',
    ]);
    
    this.getData();
    
  }

  readUser = async() => {

    console.log("Reading user...");
    const user = await AsyncStorage.getItem('user');
    
    if(user) {
        this.setState({user: JSON.parse(user)});
    }
    else {
      console.log("else activated");
      return <View style={styles.container}>
        <TextInput style={styles.textInput}
                    placeholder="Enter a username"/>
      </View> 
    }
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



