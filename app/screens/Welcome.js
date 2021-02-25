import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation();

    function navigateToSignup() {
        navigation.navigate("Signup");
    }

    function navigateToLogin() {
        navigation.navigate("Login");
    }
  
  return (

  <View style={styles.entireContainer}>

        <View style={styles.logoContainer}>
            <Image source={require('../assets/icon.png')}style={styles.image}/>            
            <Text style={styles.heading}>Mobile Guard</Text>
        </View>

        <View style={styles.headingContainer}>
            <Text style={styles.heading}>Welcome</Text>
            <TextInput
            editable
            placeholder='your name'
            maxLength={40}/>
        </View>

        <View style={styles.buttonContainer}>
            <Button title="Signup"
                color='orange'  
                onPress= {()=>navigateToSignup()}
                />
            <Button title="Login"
                style={styles.button}
                onPress= {()=>navigateToLogin()}
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  entireContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
      fontSize: '25px',
  },
  status:{
    backgroundColor: 'blue',
  },
  image:{
    width: "100px",
    height:'100px'
  },
  buttonContainer:{
    flex: 2,
    flexDirection: 'row',    
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button:{
    color: 'white'  
  }
});
