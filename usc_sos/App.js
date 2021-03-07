import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Linking, TouchableOpacity, Platform } from 'react-native';

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

  // TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

  // const AppButton = ({ onPress, title}) => (
  //   <TouchableOpacity onPress={()=>{this.dialCall(+12133751230)}} style={styles.appButtonContainer}>
  //     <Text style={styles.appButtonText}>{title}</Text>
  //   </TouchableOpacity>
  // );

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to {"\n"} USC SOS! {"\n"}</Text>
        <Text style={styles.bodyText}>The place that bundles up emergency contacts to{"\n"} keep you safe :)</Text>
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Button title="Call USC_SOS" size="lg" color='#bd2031' textAlign='center' onPress={()=>{this.dialCall(+12133751230)}}>
          <Text style={{marginLeft:50}}>Call USC_SOS</Text>
        </Button>
          <Text style={{color:'white'}}>{this.props.Name}</Text>
        </View>
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
  bodyText:{
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    width: '80%',
    paddingTop: 20, 
    paddingBottom: 20, 
    borderColor: "#bd2031"
  }
  // appButtonContainer: {
  //   elevation: 8,
  //   backgroundColor: "#bd2031",
  //   borderRadius: 10,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12
  // },
  // appButtonText: {
  //   fontSize: 20,
  //   color: "white",
  //   fontWeight: "bold",
  //   alignSelf: "center",
  // }
});
