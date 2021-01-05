import React from 'react';
import {View, Text, Button, Image, ImageBackground, Dimensions} from 'react-native';
import {BaseRouter, NavigationContainer, useLinkProps} from '@react-navigation/native';
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
  
    function BetterTodayHeader({navigation: {goBack}}) {
        
        return (

            <View style={{height: sHeight*.2, width: sWidth, backgroundColor: 'blue'}}>
         
                <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={require('../assets/Clouds.jpg')}>

                <HeaderBackButton onPress = {() => goBack()}/>
                    <Text>
                    
                    
                    </Text>
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
                               
                                header: props => <BetterTodayHeader {...props} />

                                })}/>
                <HomeStack.Screen name="Edit Habits" component={EditHabits} 
               options={({ navigation, route }) => ({ 
                    header: props => <BetterTodayHeader {...props} />

                })}/>
                <HomeStack.Screen name="Edit Habit Mode" component={EditHabitMode} 
                options={{headerShown: false}}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}


EStyleSheet.build({ $rem: sWidth / sHeight });
const styles = EStyleSheet.create({

    HeaderView: {
        height: sHeight*.2, 
        width: sWidth,
    },
   

});