import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function M_G_fullscreen() {

  const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("Welcome");
    }
    
  setInterval(()=>navigateToList(), 5000);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image source={require('../assets/icon.png')}style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status:{
    backgroundColor: 'blue',
  },
  image:{
    width: "100px",
    height:'100px'
  }
});
