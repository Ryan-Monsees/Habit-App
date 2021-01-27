import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ImageBackground, PixelRatio, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';
import BottomTabBar from '../components/BottomTabBar';
import '../global';






export default class StartScreen extends React.Component {


    constructor(props) {
        super(props);

        this.state= {
            screenHeight: sHeight
        }
    }


render () {
    return (

        <View style={styles.container} >
            
            




            <View style={styles.buttonRow}>
                <ButtonNav
                    color='lightblue'
                    buttonWidth={.2}
                    buttonHeight={.1}
                    text="Edit Habits"
                    navigation={this.props.navigation}
                    navigateTo="Edit Habits"
                />

                <ButtonNav
                    color='blue'
                    buttonWidth={.2}
                    buttonHeight={.1}
                    text="Habit Counter"
                    navigation={this.props.navigation}
                    navigateTo="Habit Counter"
                /> 
                
                <ButtonNav
                color='rgb(255, 100, 0)'
                buttonWidth={.2}
                buttonHeight={.1}
                text="Progress"
                navigation={this.props.navigation}
                navigateTo="Progress"
            />


                

            </View>

            
                <BottomTabBar navigation={this.props.navigation}/>
            
    </View>
    
    
    );
}

};


EStyleSheet.build({ $rem: sWidth / sHeight });




const styles = EStyleSheet.create({

    // Added to style properly based on the screen size
    container: {
        flex: 1,
        backgroundColor: prim,

    },

    title: {
        fontSize: '100rem',
        color: 'yellow',
        opacity: .5,
    },


    buttonRow: {
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',


    },


});

