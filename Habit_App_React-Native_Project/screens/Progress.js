import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../global.js';
import HabitProgressDisplay from '../components/HabitProgressDisplay';


export default class Progress extends React.Component {


    constructor(props) {

        super(props);
       
        
        var habitsTotalTemp = 0;
        var prevHabitsTotalTemp = 0;
        for(var i = 0; i < habits.length; i++) {

            habitsTotalTemp+=(habits[i].count*habits[i].weight);
        }

        for(var i = 0; i < prevHabits.length; i++) {

          prevHabitsTotalTemp+=(prevHabits[i].count*prevHabits[i].weight);
      }

       this.state = {
        prevHabitsArray: prevHabits,
        prevHabitsTotal: prevHabitsTotalTemp,
        habitsArray: habits,
        habitsTotal: habitsTotalTemp,
        display: 'home'
    }
    console.log("CONSTRUCTOR ACTIVATED");

  }


    render() {
        return(
          <View style = {styles.container}>

            {this.state.display == 'home' ? (
            <View style = {styles.previous}>
              <Text style = {styles.text}>
                Previous day: {prevDate}
              </Text>
              <Text style = {styles.text}>
                Total score: {this.state.prevHabitsTotal}
              </Text>

              <TouchableOpacity onPress={() => this.setState({display: 'previous'})}>
                <View>
                  <Text style = {styles.text}>
                    Check previous habits
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            ) : null}

            {this.state.display == 'previous' ? (
              <View>
                <TouchableOpacity onPress={() => this.setState({display: 'home'})}>
                  <View backgroundColor='red'> 
                    <Text style = {styles.text}>
                      go back
                    </Text>
                  </View>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={true}>
            
                { this.state.prevHabitsArray.map((item, index)=>(
                  // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
                
                  <View style={styles.habit} key={index}>
                    <HabitProgressDisplay
                          array='prevHabits' 
                          index= {index}
                    />
                  </View>
              
                  )
                  )
                }
                </ScrollView>
              </View>

            ) : null}

            
            {this.state.display == 'home' ? (
            <View style = {styles.current}>
            <Text style = {styles.text}>
                Current day: {currDate}
              </Text>
              <Text style = {styles.text}>
                Total score: {this.state.habitsTotal}
              </Text>

              <TouchableOpacity onPress={() => this.setState({display: 'current'})}>
                <View>
                  <Text style = {styles.text}>
                    Check habits
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            ) : null}

            {this.state.display == 'current' ? (
            <View>
              <TouchableOpacity onPress={() => this.setState({display: 'home'})}>
                <View backgroundColor='red'> 
                  <Text style = {styles.text}>
                    go back
                  </Text>
                </View>
              </TouchableOpacity>
              <ScrollView showsVerticalScrollIndicator={true}>
          
              { this.state.habitsArray.map((item, index)=>(
                // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
              
                <View style={styles.habit} key={index}>
                  <HabitProgressDisplay
                        array='habits' 
                        index= {index}
                  />
                </View>
            
                )
                )
              }
              </ScrollView>
            </View>

          ) : null}

            

          </View>

        );
    }
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({



  container: {
    
    flex: 1,
    alignItems: 'center',
  },  

  previous: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(0, 200, 100)'
  },

  current: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'cyan'
  },

  text: {
    textAlign: 'center',
    fontSize: '50rem'
  },

  habit: {
        
    flex: 1,
    width: sWidth,
        
  }


});