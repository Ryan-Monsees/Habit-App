import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import '../global';

import storeData from '../components/StoreData';

//==========================================
// Firebase setup
//==========================================
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDWdljrHdPoYRx3r5X-GmNyW6qzxc5GtW8",
  authDomain: "habit-app-e5db6.firebaseapp.com",
  projectId: "habit-app-e5db6",
  storageBucket: "habit-app-e5db6.appspot.com",
  messagingSenderId: "307116291206",
  appId: "1:307116291206:web:1d8593eb6f348bb51bcd07",
  measurementId: "G-879QW1DT3G"
};

// Initialize firebase
if(firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
  console.log("firebase initialized");
}

const db = firebase.firestore();







  



export default class StartScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state= {
            screenHeight: sHeight,
            user: null,
            inputUser: "" 
        }
        
        this.firebaseLogin();
       //this.firebaseSignOut();
        
          

    }

    firebaseSignOut = async() => {
      firebase.auth()
  .signOut()
  .then(() => console.log('User signed out!'));
    }

    firebaseCreateUser = async() => {

        //=========================================
          // Creates a user
          //=========================================
          
          /*firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(() => console.log("logged in"))
            .catch(error => console.log(error))
  */
            
    }

    firebaseLogin = async() => {

      const user = {email: "bob@yahoo.com", password: "123456" }
      firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
          console.log(res.user.email);
   });
    
  }

      inputUsernameHandler(textInput) {
        this.setState({ inputUser: textInput });
    };





render () {
    
        


    return (
        

        <View style={styles.container}>

           <Header navigation = {this.props.navigation} name = "Better Today"/>

           {this.state.user == null ? (
            
                <View>
                   <TextInput   style={styles.input} 
                                placeholder="Enter username" 
                                value={this.state.inputUser} 
                                onChangeText={textInput => this.inputUsernameHandler(textInput)}/>
                    
                </View>
           ): null}  

           <Button title= "Confirm" onPress={() => storeData.firebaseWrite()}  />     
            
    </View>
    
    
    );
}

};


EStyleSheet.build({ $rem: sWidth / sHeight });


const styles = EStyleSheet.create({

    // Added to style properly based on the screen size
    container: {
        flex: 1,
        backgroundColor: prim,

    },

    title: {
        fontSize: '100rem',
        color: 'yellow',
        opacity: .5,
    },



});

