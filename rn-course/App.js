import React , { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';


export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:60,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    justifyContent: 'flex-start',
  },
});
