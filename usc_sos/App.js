import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Linking, Platform } from 'react-native';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      textColor: '#6734d1',
    }
  }

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to USC_SOS! 
           <br>The place that bundles up emergency contacts to keep you safe :)</br></Text>
        <View style={styles.buttonContainer}>
          <Button title="Call USC_SOS" onPress={()=>{this.dialCall(+12133751230)}}></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5CBCE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingTop: 20, 
    paddingBottom: 20, 
    borderColor: "#033dfc"
  }
});
