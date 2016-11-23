import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class TextInputTest extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'placeholder...' }
  }

  render() {
    let os = Platform.OS
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You are using an {os.toUpperCase()} device.
        </Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => {this.setState({text}); console.log('you should not see this on render')}}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderColor: 'lightgray',
    borderWidth: 1,
    height: 40,
    textAlign: 'center',
    margin: 10,
  }
});
