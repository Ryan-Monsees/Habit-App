import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import TabButton from './TabButton';
import '../global';

export default class BottomTabBar extends React.Component {

   constructor(props) {
        super(props);
        this.navigating = this.navigating.bind(this);
        this.state = {
            navigating : false
        }
   }
    
   

    async navigating(props) {
        if(this.state.navigating == false)
        {
            console.log("start    " + props);
            this.setState({navigating: true});
            await this.props.navigation.navigate(props);
           
            this.setState({navigating: false});
            console.log("end      " + props);
        }
        else
        {
            console.log("Still navigating..." + this.state.navigating);
        }
             
        
    }


    render () {
    return(
        <View style = {styles().container}>
            <View style={styles().tabBar}>
                <TabButton 
                    navigation={() => this.navigating("Better Today")} 
                    text="Home"
                />
                <TabButton 
                    navigation={() => this.navigating("Edit Habits")} 
                    text="Edit"
                />
                <TabButton 
                    navigation={() => this.navigating("Habit Counter")} 
                    text="Track"
                />
            </View>

            
        </View>
    
    );    
    }
}

const styles = (props) => EStyleSheet.create({
    

    container: {
        
        justifyContent: 'flex-end',
        flex: 1,
        
        
        
    },

    tabBar: {
       
        height:  sHeight * .1,
        width: sWidth,
        
        backgroundColor: sec,
        
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
   

    text: {
        textAlign: 'center'
    },

   

})