import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../screens/StartScreen';
import EditHabits from '../screens/EditHabits';
import EditHabitMode from '../screens/EditHabitMode';


const HomeStack = createStackNavigator();


// Sets up the foundation for React Navigation so that
// it can transition between screens properly
export default function homeStack() {



    /*
     Background 
    <ImageBackground
    source={require('../assets/Clouds.jpg')}
    style={styles.imageBackground}
    >
    <Text style={styles.title}>
        Better Today
        </Text>
    </ImageBackground>
    */

    var Header = { 
        headerStyle: {
            
        },
    headerTintColor: 'rgb(0,0,0)',
    headerTitleAlign: 'center',
    };
    

        
       
     
  

    return (
        <NavigationContainer>
            <HomeStack.Navigator
             screenOptions={{
                 headerShown: true
             }}>
                <HomeStack.Screen name="Better Today" component={StartScreen} 
                options = {Header}/>
                <HomeStack.Screen name="Edit Habits" component={EditHabits} 
                options = {Header}/>
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode} 
                options = {Header}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}



