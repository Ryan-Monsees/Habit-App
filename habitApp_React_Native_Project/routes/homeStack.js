import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { BaseRouter, NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from '../screens/StartScreen';
import EditHabits from '../screens/EditHabits';
import EditHabitMode from '../screens/EditHabitMode';
import HabitCounter from '../screens/HabitCounter';
import Score from '../screens/Score';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EStyleSheet from 'react-native-extended-stylesheet';

import '../global';




const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        
            <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: 'blue',
                    borderColor: 'white'
                },
                activeTintColor: 'cyan',
                inactiveTintColor: 'white',
            }}
            screenOptions={({ route }) => {
                 
            }}>
            <Tab.Screen name="Better Today" component={StartScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color='white' size={size} />
          ),
            }}/>
            <Tab.Screen name="Edit Habits" component={EditHabits}
             options={{
                tabBarLabel: 'Edit',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="pencil-outline" color='white' size={size} />
          ),
            }}/>
            <Tab.Screen name="Habit Counter" component={HabitCounter}
             options={{
                tabBarLabel: 'Counter',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="counter" color='white' size={size} />
          ),
            }}/>
            
            <Tab.Screen name="Score" component={Score}
             options={{

                tabBarLabel: 'Score',
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="navigation" color='white' size={size} />
          ),
            }}/>
            </Tab.Navigator>
    
    );


}







// Sets up the foundation for React Navigation so that
// it can transition between screens properly
export default function homeStack() {

    
    
    

    function StatusBarChange() {
        return(
        <View>
        <StatusBar barStyle="light-content"  backgroundColor='rgb(0, 0, 50)' />
        </View>
        );
    }

    return (

        
        
            <NavigationContainer>
                <HomeStack.Navigator
                screenOptions={{
                    animationEnabled: false,
                }}>
                <HomeStack.Screen name="Better Today" component={TabNavigator}
                    options={({ navigation, route }) => ({
                        
                        header: props => <StatusBarChange/>


                    })} />
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode}
                    options={({ navigation, route }) => ({
                        
                        header: props => <StatusBar/>,


                    })} />
                

               


            </HomeStack.Navigator>
            </NavigationContainer>

            
        
    );
}
/*
 <HomeStack.Screen name="Score" component={Score}
                     options={({ navigation, route }) => ({
                        
                        header: props => <StatusBar/>,


                    })} />
                    */



EStyleSheet.build({ $rem: sWidth / sHeight });
const styles = EStyleSheet.create({

    Container: {
        height: Math.round(sHeight * .2),
        width: sWidth,
        
    },

    

    background: {
        backgroundColor: 'rgb(0, 0, 50)',
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end'
    },

    backButton: {
        flex: 0,
        width: sWidth * .1,
        height: sHeight * .05,
    },

    backButtonView: {

        backgroundColor: sec,
        height: sHeight * .05,
        alignItems: 'center',
        justifyContent: 'center',

    },

    backButtonText: {
        color: 'white',
        textAlign: 'center',
    },

    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: '100rem'
        
    },




});