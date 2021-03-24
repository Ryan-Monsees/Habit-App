import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../global.js';
import HabitProgressDisplay from '../components/HabitProgressDisplay';
import Header from '../components/Header';


export default class Progress extends React.Component {

  


  componentDidMount() {
    this.listener = this.props.navigation.addListener('focus', () => { 
      this.setState({})
      console.log("updated");
    });
  }


  componentWillUnmount() {
    this.listener();
  }
    constructor(props) {

        super(props);

        this.calculateTotal = this.calculateTotal.bind(this);
       
        
        var habitsTotalTemp = 0;
        var prevHabitsTotalTemp = 0;
        for(var i = 0; i < habits.length; i++) {

            habitsTotalTemp+=(habits[i].count*habits[i].weight);
        }

       
      
     

       this.state = {
        habits: prevHabits
    }

  }
  
 
    render() {
        return(

          <View style = {styles.container}>
          <Header navigation = {this.props.navigation} name = "Progress"/>

            {this.state.display == 'home' ? (
            <View style = {styles.previous}>
              <Text style = {styles.text}>
                Previous day: {prevDate}
              </Text>
              <Text style = {styles.text}>
                Total score: {this.state.prevHabitsTotal}
              </Text>

              <TouchableOpacity onPress={() => this.setState({display: 'previous'})}>
                <View style = {styles.button}>
                  <Text style = {styles.text}>
                    Check previous habits
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            ) : null}

            {this.state.display == 'previous' ? (
              <View style={{flex: 5}}>
                <TouchableOpacity onPress={() => this.setState({display: 'home'})}>
                  <View style = {styles.goBack}> 
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
                Current day: {lastDate}
              </Text>
              <Text style = {styles.text}>
                Total score: {this.state.habitsTotal}
              </Text>

              <TouchableOpacity onPress={() => this.setState({display: 'current'})}>
                <View style = {styles.button}>
                  <Text style = {styles.text}>
                    Check habits
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            ) : null}

            {this.state.display == 'current' ? (
            <View style={{flex: 5}}>
              <TouchableOpacity onPress={() => this.setState({display: 'home'})}>
                <View style = {styles.goBack}> 
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
    backgroundColor: sec
  },  

  previous: {
    
    height: sHeight * .4,
    width: '100%',
    backgroundColor: prim
  },

  current: {
    
    height: sHeight * .4,
    width: '100%',
    backgroundColor: sec
  },

  button: {
    backgroundColor: buttonColor
  },

  goBack: {
    backgroundColor: buttonColor,
    width: sWidth
  },
  text: {
    textAlign: 'center',
    fontSize: '50rem',
    color: 'white'
  },

  habit: {
        
    flex: 1,
    width: sWidth,
        
  }


});