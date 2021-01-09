import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { BaseRouter, NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


import StartScreen from '../screens/StartScreen';
import EditHabits from '../screens/EditHabits';
import EditHabitMode from '../screens/EditHabitMode';

import EStyleSheet from 'react-native-extended-stylesheet';
import { Header } from 'react-native/Libraries/NewAppScreen';


const HomeStack = createStackNavigator();


// Sets up the foundation for React Navigation so that
// it can transition between screens properly
export default function homeStack() {

    function BetterTodayHeader(props) {
        console.log("route: " + props.name);
        return (

            <View style={styles.Container}>

                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../assets/Clouds.jpg')}>

                    {/* Will only show the Back button if the 
                        screen is not the main screen */}     
                    {!(props.name == "Better Today") ? (
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => props.navigation.goBack()}>
                                <View style={styles.backButtonView}>
                                    <Text style={styles.backButtonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : null}



                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            {props.name}
                        </Text>
                    </View>

                </ImageBackground>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <HomeStack.Navigator
                screenOptions={{

                }}>
                <HomeStack.Screen name="Better Today" component={StartScreen}
                    options={({ navigation, route }) => ({

                        header: props => <BetterTodayHeader name="Better Today" {...props} />,


                    })} />
                <HomeStack.Screen name="Edit Habits" component={EditHabits}
                    options={({ navigation, route }) => ({
                        
                        header: props => <BetterTodayHeader name="Edit Habits" {...props} />,


                    })} />
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode}
                    options={{ headerShown: false }} />
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}


EStyleSheet.build({ $rem: sWidth / sHeight });
const styles = EStyleSheet.create({

    Container: {
        height: sHeight * .2,
        width: sWidth,

    },

    imageBackground: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end'
    },

    backButton: {
        flex: 0
    },

    backButtonView: {

        backgroundColor: 'blue',
        width: sWidth * .1,
        height: sHeight * .05,
        alignItems: 'center',
        justifyContent: 'center',

    },

    backButtonText: {

        textAlign: 'center',
    },

    headerText: {
        textAlign: 'center',
        fontSize: '100rem'
    },




});