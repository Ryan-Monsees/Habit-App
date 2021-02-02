import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import ButtonNav from '../components/ButtonNav';
import HabitEditDisplay from '../components/HabitEditDisplay';

import AsyncStorage from '@react-native-community/async-storage';

import storeData from '../components/StoreData';
import Header from '../components/Header';


import '../global.js';





//============================================================
// Where you edit the list of habits
//============================================================
export default class EditHabits extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      habitsArray: habits
    }


  }

  componentDidMount() {
    this.listener = this.props.navigation.addListener('focus', () => { 
      this.setState({habitsArray: habits});
  });
   
  }

  updateHabits() {
    this.setState({ habitsArray: habits });
  }




  render() {
    return (
      
      <View style={styles.MainContainer}>

        <Header navigation = {this.props.navigation} name = "Edit Habits"/>
        

        <View style={styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={true}>
            {/* Displays the list of habits */}
            {this.state.habitsArray.map((item, index) => (
              // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Edit Habit Mode", { index: index, onGoBack: () => this.updateHabits() })}
                key={index}>
                <View style={styles.habit}>
                  <HabitEditDisplay
                    index={index}
                    name={item.name}
                    count={item.count}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
            )
            }
          </ScrollView>
        </View>

        
          {/* Navigates to Edit Habit Mode. Passes index -1 to indicate new habit */}
          <ButtonNav
            color={buttonColor}
            buttonWidth={1}
            buttonHeight={.1}
            text="Add new habit"
            navigation={this.props.navigation}
            navigateTo="Edit Habit Mode"
            parameters={{ index: -1, onGoBack: () => this.updateHabits() }}
          />
        

       
        
      </View>
    );

  }
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: prim,
  },

  habit: {
    flex: 1,
    width: sWidth,

  },

  scrollView: {
    flex: 4,
    alignItems: 'center',
  },


  

  
});

