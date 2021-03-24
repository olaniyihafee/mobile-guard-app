import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Groups() {

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
}
  
  return (

  <View style={styles.entireContainer}>

        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/icon.png')}style={styles.image}/>
          <Text style={styles.heading}>Groups</Text>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Groups</Text>
        </View>
               
        <View>
          <a onClick={() => { document.location.href = "profile.html"; }}>forgot password</a> 
        </View> 

        <View style={styles.buttonsContainer}>
            <Button title="Home"
              style={styles.button}
              color='orange'  
              onPress= {()=>navigateToHome()}
              />
           
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  listItems:{
    display: 'inline-block',
  },
  entireContainer: {
    flex: 1,    
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '25px',
  },
  formsContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textinput: {
    width: '250px',
    height: '40px',
    margin: '10px',
    marginBottom: '20px',
    padding: '5px',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  image:{
    width: "100px",
    height:'100px'
  },
  buttonContainer:{
    flex: 2,
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button:{
    color: 'blue',
  }
});
