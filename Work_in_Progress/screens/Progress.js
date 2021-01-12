import React from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import '../global.js';
import HabitProgressDisplay from '../components/HabitProgressDisplay';


export default class Progress extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            prevHabitsArray: prevHabits,
            HabitsArray: habits
        }
    }



    render() {
        return(
            <View style = {styles.scrollView}>
          <ScrollView showsVerticalScrollIndicator={true}>
          {/* Displays the list of habits */}
          { this.state.prevHabitsArray.map((item, index)=>(
            // Makes it so when you click on a Habit it passes the habit index and updateHabits() to Edit Habit Mode and navigates to it
           
            <View style={styles.habit} key={index}>
              <HabitProgressDisplay 
                    index= {index}
                    name= {item.name}
                    count= {item.count}
              />
            </View>
         
            )
            )
          }
          </ScrollView>
        </View>
        );
    }
}

EStyleSheet.build({ $rem: sWidth / sHeight });

const styles = EStyleSheet.create({



  scrollView: {
    
    flex: 1,
    alignItems: 'center',
  },  

  habit: {
        
    flex: 1,
    width: sWidth,
        
  }


});