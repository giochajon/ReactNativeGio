import React, { Component } from 'react';
//import { AppRegistry, View, Image, StyleSheet  } from 'react-native';
import { Alert, AppRegistry, View,  StyleSheet, ActivityIndicator  } from 'react-native';

import { Image, Button } from 'react-native-elements';
  
class SocilaContract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  } 

  // const styles = StyleSheet.create({
  //   stretch: {  width: 340,     height: 500     },
  //   //flex:1, height: undefined, width: undefined
  //   //alignSelf: 'stretch',
  //   //backgroundColor:"blue",
  // });


  //     return (
  //       <View style={{backgroundColor:"blue"}}>

  //         <Image
  //           style={styles.stretch}
  //           //style={{width: 300, height: 600}}
            
  //           //style={{flex:1, height: undefined, width: undefined}}
  //           source={{uri: 'https://s3-us-west-2.amazonaws.com/public.prod.rainforestab.ca/images/imageManager/rainforest-social-contract2.png'}}
  //           resizeMode="contain"
  //         />
         
  //       </View>
  //     );
  //   }

  
  // Standard Image
 
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
  <View style={{flexDirection: 'column', backgroundColor:"blue"}}>
  <Image
    source={{ uri: "https://s3-us-west-2.amazonaws.com/public.prod.rainforestab.ca/images/imageManager/rainforest-social-contract2.png" }}
    //style={{width: 300, height: 600}}
    style={{width: 300, height: 500}}

    
    resizeMode="contain"
  />


  <Button style={{ backgroundColor:"#35883a"}}
  title="I agree"
  type="outline"
  onPress={this.pressButtonAction}
/>
</View>
 
  );
}
}

export default SocilaContract
