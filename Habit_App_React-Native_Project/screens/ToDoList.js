import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../global.js';
import storeData from '../components/StoreData';
import Header from '../components/Header';
import ToDoItem from '../components/ToDoItem';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ToDoList : toDoList
        }
    }

    render() {
        return(
            <View style = {styles.container}>
                <Header navigation = {this.props.navigation} name = "Todo List"/>
                <View style={styles.list}>
                <ScrollView showsVerticalScrollIndicator={true}>
            {/* Displays the list of habits */}
            {this.state.ToDoList.map((item, index) => (
              // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
              <TouchableWithoutFeedback
                key={index}>
                
                  <ToDoItem
                    index={index}
                  />
                
              </TouchableWithoutFeedback>
            )
            )
            }
          </ScrollView>
                </View>
                
                
                

            </View>
        );
    }
}


EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: prim
    },

    list: {
        flex: 4
    },

    button: {
        flex: 1,
    }
});