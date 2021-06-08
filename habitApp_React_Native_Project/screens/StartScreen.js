import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import EStyleSheet from 'react-native-extended-stylesheet';

import Header from '../components/Header';
import '../global';

import firebase from '../components/Firebase';







  



export default class StartScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state= {
            screenHeight: sHeight,
            user: null,
            inputUser: "",
            modal: "logged out"
        }
        
        firebase.login();
    }

    

      inputUsernameHandler(textInput) {
        this.setState({ inputUser: textInput });
      };





render () {
    
        


    return (
        

        <View style={styles.container}>

           <Header navigation = {this.props.navigation} name = "Better Today"/>

           {this.state.modal == "logged out" ? (
            
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

