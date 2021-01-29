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

