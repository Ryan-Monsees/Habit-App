import React from 'react';
import { View } from 'react-native';


import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonNav from '../components/ButtonNav';

import Header from '../components/Header';
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
        

        <View style={styles.container}>

           <Header navigation = {this.props.navigation} name = "Better Today"/>

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

