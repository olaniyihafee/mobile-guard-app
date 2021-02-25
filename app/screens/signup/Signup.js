import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Signup() {
  
  return (
      
  <View style={styles.container}>
        <View style={styles.top}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Image source={require('../../assets/icon.png')}style={styles.image}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Back"
            onPress= {()=>onBackPressed()}
            />
            <Button title="Back"
            onPress= {()=>onBackPressed()}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status:{
    backgroundColor: 'blue',
  },
  image:{
    width: "100px",
    height:'100px'
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
