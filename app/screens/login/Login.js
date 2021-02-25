import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function Login() {
  
  return (

  <View style={styles.entireContainer}>

        <View style={styles.logoContainer}>
          <Image source={require('../../assets/icon.png')}style={styles.image}/>
          <Text style={styles.heading}>Mobile Guard</Text>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Login</Text>
        </View>

        <View style={styles.formsContainer}>
          <Text>Usersname</Text>
          <TextInput 
            style={styles.textinput}
            placeholder='your name'
            editable
            />

          <Text>Password</Text>
          <TextInput
            style={styles.textinput}
            placeholder='your name'
            editable
            maxLength={40}
            />        
            
          <a onClick={() => { document.location.href = "profile.html"; }}>forgot password</a> 

          <input type='checkbox'/>
        </View>

        <View style={styles.buttonsContainer}>
            <Button title="Signup"
              style={styles.button}
              color='orange'  
              onPress= {()=>onBackPressed()}
              />
            <Button title="Ok"
              style={styles.button}
              color='white'  
              onPress= {()=>onBackPressed()}
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
    backgroundColor: 'white',
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
