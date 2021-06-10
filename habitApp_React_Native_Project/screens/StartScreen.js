import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/Header';
import '../global';

//==========================================
// Firebase setup
//==========================================
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "../global";

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
            user: null,
            inputUser: "",
            login: false
        }
    }

    // Runs once when the app starts
    componentDidMount() {
        
       // Checks if user is logged in
       firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({login: true});
        }
        else {
            this.setState({login: false});
        }
     });
     const user = {email: "ref@yahoo.com", password: "123456"};
     //this.login(user);
     this.getScores(user);
     
    
    }



    // Gets all stored dates and scores from Firestore
    // and stores them in global variable prevScores
    getScores = async(user) => {
   
    prevScores = [];
    await firebase.firestore().collection("users").doc(user.email).collection("History").get()
    .then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      console.log("date: " + doc.id + " score: " + doc.data().score);
      prevScores.push({date: doc.id, score: doc.data().score});
    });
    });

    }

    printScores = () => {
      for(var i = 0; i < prevScores.length; i++) {
        console.log("Index: " + i + " contains " + prevScores[i].date + " " + prevScores[i].score);
      }
      console.log("SCORES DONE PRINTING");
    }

    // Creates a user
    createUser = async(user) => { 
          
          firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(() => console.log("logged in"))
            .catch(error => console.log(error))
  
            
    }

    login = async(user) => {

        firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(res.user.email);
     });
    }

    signOut = async() => {
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    

    

      inputUsernameHandler(textInput) {
        this.setState({ inputUser: textInput });
      };





render () {
    
        


    return (
        

        <View style={styles.container}>

           <Header navigation = {this.props.navigation} name = "Better Today"/>

           {this.state.login == false ? (
            
                <View>
                   <TextInput   style={styles.input} 
                                placeholder="Enter username" 
                                value={this.state.inputUser} 
                                onChangeText={textInput => this.inputUsernameHandler(textInput)}/>
                    
                    <Button title= "Login" onPress={() => firebase.saveScore()}  />     
            
                </View>
           ): this.state.modal == "logged in" ? (
            
            <View>
               <TextInput   style={styles.input} 
                            placeholder="Enter username" 
                            value={this.state.inputUser} 
                            onChangeText={textInput => this.inputUsernameHandler(textInput)}/>
                <Button title= "TEST" onPress={() => firebase.saveScore()}  />     
            
            </View>
       ): this.state.modal == "sign up" ? (
            
        <View>
           <TextInput   style={styles.input} 
                        placeholder="Enter username" 
                        value={this.state.inputUser} 
                        onChangeText={textInput => this.inputUsernameHandler(textInput)}/>
            <Button title= "TEST" onPress={() => firebase.saveScore()}  />     
        
        </View>
   ): null}

<Button title= "TEST" onPress={() => this.printScores()}  />  
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

