import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import ButtonNav from '../components/ButtonNav';
import HabitEditDisplay from '../components/HabitEditDisplay';

import AsyncStorage from '@react-native-async-storage/async-storage';
import storeData from '../components/StoreData';
import Header from '../components/Header';

import EditHabitMode from '../components/EditHabitMode';


import '../global.js';





//============================================================
// Where you edit the list of habits
//============================================================
export default class EditHabits extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      habitsArray: habits,
      modalVisible: false,
      index: -1
    }
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidMount() {
    this.listener = this.props.navigation.addListener('focus', () => { 
      this.setState({habitsArray: habits});
  });
   
  }

  openModal(props) {
    console.log("changing index to: " + props);
    this.setState({index: props});
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  updateHabits() {
    this.setState({ habitsArray: habits });
  }




  render() {
    return (
      
      <View style={styles().MainContainer}>

        <Header navigation = {this.props.navigation} name = "Edit Habits"/>
        
        <Modal
        
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        
      >
       <EditHabitMode index={this.state.index} closeModal={this.closeModal}/>
      </Modal>

        <View style={styles().scrollView}>
          <ScrollView showsVerticalScrollIndicator={true}>
            {/* Displays the list of habits */}
            {this.state.habitsArray.map((item, index) => (
              // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
              <TouchableWithoutFeedback onPress={() => this.openModal(index)}
                key={index}>
                <View style={styles().habit}>
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

        <View style={styles().addHabitButton}>
          {/* Navigates to Edit Habit Mode. Passes index -1 to indicate new habit */}
         <TouchableOpacity onPress = {() => {
           this.openModal(-1);
         }}>
           <View>
             <Text style = {styles().addHabitText}>
               Add new habit
             </Text>
           </View>
         </TouchableOpacity>

         </View>
        
      </View>
    );

  }
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = (props) => EStyleSheet.create({

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
  
  addHabitButton: {
    //height: sHeight * .1,
    flex: .5,
    backgroundColor: buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  
  addHabitText: {
    fontSize: '50rem',
    
  },


  

  
});

