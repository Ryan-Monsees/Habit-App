import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../screens/StartScreen';
import Workout from '../screens/Workout';
import EditHabits from '../screens/EditHabits';
import EditHabitMode from '../screens/EditHabitMode';


const HomeStack = createStackNavigator();


// Sets up the foundation for React Navigation so that
// it can transition between screens properly
export default function homeStack() {
    return (
        <NavigationContainer>
            <HomeStack.Navigator
             screenOptions={{
                 headerShown: false
             }}>
                <HomeStack.Screen name="Home" component={StartScreen} />
                <HomeStack.Screen name="Workout" component={Workout} />
                <HomeStack.Screen name="Edit Habits" component={EditHabits} />
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}



