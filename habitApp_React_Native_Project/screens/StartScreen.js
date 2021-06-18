import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/Header';
//import storeData from '../components/StoreData';
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
            inputEmail: "",
            inputPass: "",
            inputPass2: "",
            modal: "Logged out"
        }

        this.checkLogin();
        
    }

    // Runs once when the app starts
    componentDidMount() {

      this.listener = this.props.navigation.addListener('focus', () => { 
        this.clearInput();
        this.checkLogin();
         
      });
      
    
     
     
    
    }

    clearInput() {
      this.setState({   inputEmail: "",
                          inputPass: "",
                          inputPass2: "",
                    })
    };
    

    checkLogin() {
    // Checks if user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({modal: "logged in"});
      }
  else {
      this.setState({modal: "logged out"});
  }
});
    }

    printScores = () => {
      for(var i = 0; i < history.length; i++) {
        console.log("Index: " + i + " contains " + history[i].date + " " + history[i].score);
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

    login = async() => {

        const user = {email: this.state.inputEmail, password: this.state.inputPass};
        firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          this.setState({
            inputEmail: "",
            inputPass: "",
            inputPass2: "",
            modal: "logged in"});
     }).catch(error => {
      Alert.alert(
        "Error",
        error.toString().substring(7),
        [
          
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
      });
    }

    logout = async() => {
        firebase.auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    passwordReset(email) {
      firebase.auth().sendPasswordResetEmail(email);
    }

    signUp() {

      if(this.state.inputPass == this.state.inputPass2) {
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.inputEmail, this.state.inputPass)
        .then(() => { console.log("signed up!");
                      this.clearInput();})
        
        .catch(error => {
          Alert.alert(
            "Invalid",
            error.toString().substring(7),
            [
              
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
          this.setState({ inputPass: "",
                          inputPass2: ""});})
      }
      else {
        Alert.alert(
          "Invalid",
          "Passwords do not match",
          [
            
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
        this.setState({ inputPass: "",
        inputPass2: ""});
      }
      
      
      
    }
    

      inputEmailHandler(textInput) {
        this.setState({ inputEmail: textInput });
      };

      inputPassHandler(textInput) {
        this.setState({ inputPass: textInput });
      };

      inputPass2Handler(textInput) {
        this.setState({ inputPass2: textInput });
      };

      cancel() {
        this.clearInput();
        this.setState({ modal: "logged out"});
      };


render () {
    
        


    return (
        
      <View style={styles.outerLayer}>

        <View style={styles.container}>

           <Header navigation = {this.props.navigation} name = "Better Today"/>

           {this.state.modal == "logged out" ? (
            
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => this.setState({modal: "login"})}>
                      <View style = {styles.signIn}>
                        <Text style={styles.signInText}>
                          Sign in
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({modal: "sign up"})}>
                      <View style = {styles.signUp}>
                        <Text style={styles.signInText}>
                          Sign up
                        </Text>
                      </View>
                    </TouchableOpacity>
                         
            
                </View>
           ): this.state.modal == "logged in" ? (
            
            <View>
               <Text style = {styles.loggedIn}>
                 Logged In!
               </Text>

               <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => this.logout()}>
                      <View style = {styles.cancel}>
                        <Text style={styles.signInText}>
                          Logout
                        </Text>
                      </View>
                    </TouchableOpacity>
                         
            
        </View>
            
            </View>
       ): this.state.modal == "sign up" ? (
      
        <View>
        <View style={styles.inputView}>
           <TextInput   style={styles.input} 
                        placeholder="Enter your email"
                        placeholderTextColor='white'
                        maxLength={50}
                        value={this.state.inputEmail} 
                        onChangeText={textInput => this.inputEmailHandler(textInput)}/>
            
            <TextInput  style={styles.input}
                        secureTextEntry={true} 
                        placeholder="Enter password"
                        placeholderTextColor='white'
                        maxLength={50}
                        value={this.state.inputPass} 
                        onChangeText={textInput => this.inputPassHandler(textInput)}/>
                       

            <TextInput  style={styles.input}
                        secureTextEntry={true} 
                        placeholder="Confirm password"
                        placeholderTextColor='white'
                        maxLength={50}
                        value={this.state.inputPass2} 
                        onChangeText={textInput => this.inputPass2Handler(textInput)}/>
            
        </View>
        <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => this.cancel()}>
                      <View style = {styles.cancel}>
                        <Text style={styles.signInText}>
                          CANCEL
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.signUp()}>
                      <View style = {styles.signUp}>
                        <Text style={styles.signInText}>
                          OK
                        </Text>
                      </View>
                    </TouchableOpacity>
                         
            
        </View>

      </View>

    ): this.state.modal == "login" ? (     
      <View>
        <View style={styles.inputLoginView}>
           <TextInput   style={styles.input} 
                        placeholder="Enter your email"
                        placeholderTextColor='white'
                        maxLength={50}
                        value={this.state.inputEmail} 
                        onChangeText={textInput => this.inputEmailHandler(textInput)}/>
            
            <TextInput  style={styles.input}
                        secureTextEntry={true} 
                        placeholder="Enter password"
                        placeholderTextColor='white'
                        maxLength={50}
                        value={this.state.inputPass} 
                        onChangeText={textInput => this.inputPassHandler(textInput)}/>
                       
        </View>

        <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => this.cancel()}>
                      <View style = {styles.cancel}>
                        <Text style={styles.signInText}>
                          CANCEL
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.login()}>
                      <View style = {styles.signUp}>
                        <Text style={styles.signInText}>
                          OK
                        </Text>
                      </View>
                    </TouchableOpacity>
                         
            
        </View>
      </View>

    
    
    ): null}
    
    </View>
    
    </View>
    );
}

};




const styles = EStyleSheet.create({

    // Makes the keyboard not move the view
    outerLayer: {
      height: sHeight,
    }, 

    container: {
        flex: 1,
        backgroundColor: prim,

    },

    title: {
        fontSize: '100rem',
        color: 'yellow',
        opacity: .5,
    },

    buttonsView: {
      height: sHeight * .2,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    inputView: {
        backgroundColor: sec,
        height: sHeight * .3,
        borderWidth: 1,
        borderColor: 'white'
    },

    inputLoginView: {
      backgroundColor: sec,
      height: sHeight * .2,
      borderWidth: 1,
      borderColor: 'white'
  },

    input: {
      borderWidth: 1,
      borderColor: 'white',
        flex: 1,
        color: 'white',
        textAlign: 'center'
    },

    cancel: {
      height: sHeight * .1,
      width: sWidth * .2,
      backgroundColor: 'rgb(150,0,100)',
      justifyContent: 'center'
    },

    signIn: {
      height: sHeight * .1,
      width: sWidth * .2,
      backgroundColor: buttonColor,
      justifyContent: 'center'
    },

    signUp: {
      height: sHeight * .1,
      width: sWidth * .2,
      backgroundColor: buttonColor,
      justifyContent: 'center'
    },

    signInText: {
      textAlign: 'center',
      color: 'white',
      fontSize: '30rem'
    },

    loggedIn: {
      textAlign: 'center',
      color: 'white',
      fontSize: '50rem'
    }



});

