import React from 'react';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../global.js';

import firebase from 'firebase/app';
import "firebase/auth";

const db = firebase.firestore();

class StoreData extends React.Component {


    StoreHabits = async() => {
        
            try {
              // Stores the habit array locally
              await AsyncStorage.setItem('array', JSON.stringify(habits))
              
              // Checks if user is logged in
             firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                      // Calculates score based on habit weight and habit count
                      var calculatedScore = 0;
                      for(var i = 0; i < habits.length; i++)
                      {
                        calculatedScore += (habits[i].weight * habits[i].count);
                      }
                      
                      
                      // Stores the data in the database under their email
                      //db.collection("users").doc(user.email).collection(lastDate).doc("Score").set({
                      db.collection("users").doc(user.email).collection("History").doc(lastDate).set({
                       
                      score: calculatedScore,
                        
                      })
                      .then(() => {
                        console.log("Document written with ID: ", user.email);
                      })
                      .catch((error) => {
                        console.error("Error adding document: ", error);
                      });
                  }
            });

            } catch(err) {
              console.log(err);
            }
    }  
    
}

const storeData = new StoreData();
export default storeData;