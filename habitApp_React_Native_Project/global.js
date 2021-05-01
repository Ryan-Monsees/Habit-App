import React from 'react';
import {Dimensions, StatusBar} from 'react-native';






// stores all the previous habits
global.preHabits = [];

global.habits = [];


global.dateHistory = [];

global.toDoList = [{name: "lift", difficulty: 3}, {name: "eat", difficulty: 1}];

global.lastDate = "";
global.sHeight = Math.round(Dimensions.get('window').height);
global.sWidth = Dimensions.get('window').width;

global.prim = 'rgb(0, 0, 100)'
global.sec = 'rgb(0, 25, 150)'
global.buttonColor = 'rgb(0, 75, 175)'
global.red = 'rgb(100, 0, 0)'


