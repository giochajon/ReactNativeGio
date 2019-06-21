import React, { Component } from 'react';
//import { AppRegistry, View, Image, StyleSheet  } from 'react-native';
import { Alert, AppRegistry, View,  StyleSheet, ActivityIndicator, Text, ScrollView } from 'react-native';

import { Image, Button } from 'react-native-elements';
  
class SocilaContractTxt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  } 

  pressButtonAction(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }


  render() {
 return(

  <ScrollView style={{flexDirection: 'column', backgroundColor:"white"}}>
  
  <Text style={{marginTop: 30, fontWeight: 'bold'}}>RAINFOREST SOCIAL CONTRACT</Text>
  
  <Text style={{marginTop: 10, fontSize: 10}}>I am joining the Alberta community of people sharing a common faith in continuously growing the CULTURE of innovation and
entrepreneurship. We are an inclusive, silo-busting, sector agnostic, all industry, open source, ego shrinking, ecosystem building,
entrepreneur focused, wide open, social barrier smashing community. </Text>
  
<Text style={{marginTop: 10, fontSize: 10}}>This agreement describes what it means to innovate together. It defines what we allow and pursue versus what we resist and avoid.
It is a litmus test for the quality of our decisions, actions and ways of being together. By signing this agreement I agree to join the
Rainforest community, to embrace and promote this explicit set of 10 values and principles: </Text>
  
 
  <Text  style={{ marginTop: 20, fontWeight: 'bold', color: 'green'}}>
  1. DIVERSITY - 
        <Text style={{color: 'grey'}}>
        I embrace diversity, strive to create equal opportunity for every
person and I am open to meeting anyone in this community.
        </Text>

  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  2. FREE HELP - 
        <Text style={{color: 'grey'}}>
        I understand that I will receive valuable help from others for free.
        </Text>
  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  3. TRUST -  
        <Text style={{color: 'grey'}}>
        I will give trust to others before expecting to receive trust in return.
        </Text>
  </Text>


  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  4. PAY IT FORWARD -   
        <Text style={{color: 'grey'}}>
        I agree to “pay forward” whatever positive benefits I receive.
• For every introduction I get, I will provide an introduction to another person.
• For every hour of advice I receive, I will give an hour of advice to someone else.
• For every risk someone takes with me, I will take a risk with a dierent person.
        </Text>
  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  5. FAIRNESS -   
        <Text style={{color: 'grey'}}>
        I will be nice and treat everyone fairly. I will take advantage of no one.
        </Text>
  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  6. LISTENING -  
        <Text style={{color: 'grey'}}>
        I will bring people together and listen, as none of us is as smart as all of
us. I believe in the big tent. I believe we gain strength through diversity.
        </Text>
  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  7. HONESTY - 
        <Text style={{color: 'grey'}}>
        I will be truthful and frank. I will break rules and call out elephants
in the room.  
        </Text>
  </Text>

  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  8. TEAM SPORT - 
        <Text style={{color: 'grey'}}>
        I will create teams to play, dream, experiment, iterate, and persist.
I understand mistakes happen. Failing quickly and cheaply are acceptable ways of
testing new ideas.   
        </Text>
  </Text>


<Text  style={{ fontWeight: 'bold', color: 'green'}}>
  9. SHARING - 
        <Text style={{color: 'grey'}}>
        I will open myself to learning from others. I am eager to act to learn.
I will share my knowledge in the spirit of the Creative Commons to help nurture
learning in others.    
        </Text>
  </Text>


  <Text  style={{ fontWeight: 'bold', color: 'green'}}>
  10. ROLE MODEL -   
        <Text style={{color: 'grey'}}>
        I will lead at times and follow at other times. Each person acts
as a role model for everyone else. I will live these ideals and enforce them as a
member of the Rainforest community.    
        </Text>
  </Text>




  <Button style={{ backgroundColor:"#35883a"}}
  title="I agree"
  type="outline"
  onPress={this.pressButtonAction}
/>
</ScrollView>
 
  );
}
}

export default SocilaContractTxt
