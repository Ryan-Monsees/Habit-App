import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import '../global.js'

class StoreData extends React.Component {


    StoreHabits() {
        console.log("I found you, FAKER!");
    }

    StoreDay() {
        console.log("FAKER, I'm more real than you!");
    }
}

const storeData = new StoreData();
export default storeData;