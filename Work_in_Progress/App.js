import React, {useRef} from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import HomeStack from './routes/homeStack';

import './global.js'

import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';



YellowBox.ignoreWarnings([
  'Require cycle:',
]);

// Displays the HomeStack, which allows the activation
// of React Navigation
export default class App extends React.Component {

  componentDidMount() {
      
    this.getData();
    habits.push({name: "Picking lip", count: 0});
    habits[0].count++;
    console.log("Array: " + habits[0].count);
    
  }
 
  getData() {
  
    var userList = [];
     
  
  }

  constructor() {
    super();


  }


  
render() {
  return (
  <HomeStack/>
  );
};
};


    

const styles = EStyleSheet.create({
  screen : {
    flex: 1,
  }
});

