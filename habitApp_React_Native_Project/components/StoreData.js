import React from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../global.js';

import firebase from 'firebase/app';
import "firebase/auth";

class StoreData extends React.Component {


    StoreHabits = async() => {
        
            try {
              
              await AsyncStorage.setItem('array', JSON.stringify(habits))
            
            } catch(err) {
              console.log(err);
            }
    }  
    
}

const storeData = new StoreData();
export default storeData;