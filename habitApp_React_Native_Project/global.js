import React from 'react';
import {Dimensions, StatusBar} from 'react-native';



// Local storage of user who is logged in
global.user = "";

global.prevScores = [];

global.loggedIn = false;


// stores all the previous habits
global.preHabits = [];

global.habits = [];


global.dateHistory = [];


global.lastDate = "";
global.sHeight = Math.round(Dimensions.get('window').height);
global.sWidth = Dimensions.get('window').width;

global.prim = 'rgb(0, 0, 100)'
global.sec = 'rgb(0, 25, 150)'
global.buttonColor = 'rgb(0, 200, 255)'
global.red = 'rgb(100, 0, 0)'


