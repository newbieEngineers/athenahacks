import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Linking, Platform, Input, TouchableOpacity } from 'react-native';

// import firebase from "firebase/app";
// import "firebase/analytics";

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
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={()=>{this.dialCall(+12133751230)}}>
              <Text style={styles.customBtnText}>Call USC SOS</Text>
            </TouchableOpacity>
        {/* <Button title="Call USC_SOS" size="lg" color='#EDCD30' style={{ fontSize: 30}} textAlign='center' onPress={()=>{this.dialCall(+12133751230)}}>
          <Text style={{marginLeft:50}}>Call <b>USC SOS</b></Text>
        </Button> */}
          {/* <Text style={{color:'white'}}>{this.props.Name}</Text> */}
        </View>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bd2031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20, 
    color: "#ffffff"
  },
  bodyText:{
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 30,
    color: "#d9d9d9"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    width: '80%',
    paddingTop: 20, 
    paddingBottom: 20, 
    borderColor: "#bd2031"
  },
  //style the text of button
  customBtnText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#bd2031'
  },
  //style the background of Button
  customBtnBG: {
    backgroundColor: "#EDCD30",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
  //
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
