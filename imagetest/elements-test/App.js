import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet  } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    stretch: {  width: 340,     height: 500     },
    //flex:1, height: undefined, width: undefined
    //alignSelf: 'stretch',
    //backgroundColor:"blue",
  });


      return (
        <View style={{backgroundColor:"blue"}}>

          <Image
            style={styles.stretch}
            //style={{width: 300, height: 600}}
            
            //style={{flex:1, height: undefined, width: undefined}}
            source={{uri: 'https://s3-us-west-2.amazonaws.com/public.prod.rainforestab.ca/images/imageManager/rainforest-social-contract2.png'}}
            resizeMode="contain"
          />
         
        </View>
      );
    }


