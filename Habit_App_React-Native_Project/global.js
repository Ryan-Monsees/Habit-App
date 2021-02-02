import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import * as SQLite from 'expo-sqlite';







global.habits = [];
global.prevHabits = [];
global.toDoList = [{name: "lift", difficulty: 3}, {name: "eat", difficulty: 1}];
global.prevDate = "";
global.currDate = "";
global.sHeight = Math.round(Dimensions.get('window').height);
global.sWidth = Dimensions.get('window').width;

global.prim = 'rgb(0, 0, 100)'
global.sec = 'rgb(0, 25, 150)'
global.buttonColor = 'rgb(0, 75, 175)'
global.red = 'rgb(100, 0, 0)'


global.db = SQLite.openDatabase(
    {
      name: 'SQLite',
      location: 'default',
      createFromLocation: '~SQLite.db',
    },
    () => { },
    error => {
      console.log("ERROR: " + error);
    }
  );
  
