import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { BaseRouter, NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


import StartScreen from '../screens/StartScreen';
import EditHabits from '../screens/EditHabits';
import EditHabitMode from '../screens/EditHabitMode';
import HabitCounter from '../screens/HabitCounter';
import Progress from '../screens/Progress';



import EStyleSheet from 'react-native-extended-stylesheet';
import { Header } from 'react-native/Libraries/NewAppScreen';

import '../global';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';



import BottomTabBar from '../components/BottomTabBar';



const HomeStack = createStackNavigator();











// Sets up the foundation for React Navigation so that
// it can transition between screens properly
export default function homeStack() {

    function Header(props) {
        
        return (
            

            <View style={styles.Container}>
                
                <View style = {styles.background}>
               

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
                </View>

                
               
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

                        header: props => <Header name="Better Today" {...props} />,
                        tab: props => <Header name="Better Today" {...props} />

                    })} />
                <HomeStack.Screen name="Edit Habits" component={EditHabits}
                    options={({ navigation, route }) => ({
                        
                        header: props => <Header name="Edit Habits" {...props} />,


                    })} />
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode}
                    options={{ headerShown: false }} />

                <HomeStack.Screen name="Habit Counter" component={HabitCounter}
                    options={({ navigation, route }) => ({
                        
                        header: props => <Header name="Habit Counter" {...props} />,


                    })} />

                <HomeStack.Screen name="Progress" component={Progress}
                    options={({ navigation, route }) => ({
                        
                        header: props => <Header name="Progress" {...props} />,


                    })} />


            </HomeStack.Navigator>
            </NavigationContainer>

            
        
    );
}




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