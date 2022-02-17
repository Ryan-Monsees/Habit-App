import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../global.js';
import Header from '../components/Header';


export default class Score extends React.Component {

  


  componentDidMount() {
    this.listener = this.props.navigation.addListener('focus', () => { 
      
      // Calculates score based on habit weight and habit count
      calculatedScore = 0;
      for(i = 0; i < habits.length; i++)
      {
        calculatedScore += (habits[i].weight * habits[i].count);
      }
      
      this.setState({score: calculatedScore})
      console.log("updated");

      //==================================================
      // Test for habits printing
      this.printScores();
    });
  }


  componentWillUnmount() {
    this.listener();
  }
    constructor(props) {

      super(props);
      
      // Calculates score based on habit weight and habit count
      var calculatedScore = 0;
      for(i = 0; i < habits.length; i++)
      {
        calculatedScore += (habits[i].weight * habits[i].count);
      }

      this.state = {
        score: calculatedScore
    }


  }
  
 
    render() {
        return(

          <View style = {styles.container}>
          <Header navigation = {this.props.navigation} name = "Score"/>

           
         <View style={styles.scoreView}>
           <Text style={styles.scoreText}>
            {this.state.score}
           </Text>
         </View>
            
            

          </View>

        );
    }

    printScores = () => {
      for(var i = 0; i < history.length; i++) {
        console.log("Index: " + i + " contains " + history[i].date + " " + history[i].score);
        console.log(history[i].prevHabits[0].count);
      }
      
      console.log("SCORES DONE PRINTING");
    }
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({



  container: {
    
    flex: 1,
    alignItems: 'center',
    backgroundColor: prim
  },  

  scoreView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  scoreText: {
    color: 'white',
    fontSize: '200rem'
  }
  


});