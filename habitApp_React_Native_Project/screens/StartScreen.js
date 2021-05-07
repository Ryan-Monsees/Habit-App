import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import '../global';

//==========================================
// Firebase setup
//==========================================
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

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
//if(firebase.apps.length == 0) {
 // firebase.initializeApp(firebaseConfig);
//}

//const db = firebase.firestore();
//const userRef = db.collection('users');

/*

auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });

*/




export default class StartScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state= {
            screenHeight: sHeight,
            user: null,
            inputUser: ""
            
        }
        this.readUser();
        

    }

    

    readUser = async() => {

        console.log("Reading user...");
        const user = await AsyncStorage.getItem('user');
        
        if(user) {
            console.log("user is " + user);
            this.setState({user: JSON.parse(user)});
        }
        else {
          console.log("no user found");
            
        }
      }

      confirmUser = async() => {
          const username = this.state.inputUser;
          const _id = Math.random().toString(36).substring(7);
          const user = {_id, username};
          
            await AsyncStorage.setItem('user', JSON.stringify(user));
            this.setState({user: user});

            await userRef.add({
                username: username
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

           <Button title= "Confirm" onPress={() => this.confirmUser()}  />     
            
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

