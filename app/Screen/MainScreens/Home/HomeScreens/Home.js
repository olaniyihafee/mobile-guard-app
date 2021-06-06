// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  ListItem, 
  Avatar 
} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../../../Components/Loader';

import API_URI from '../../../../common-codes/config/api'
import {ui_theme} from '../../../../common-codes/config/ui_theme'

const Home = ({navigation}) => {

  const [ test, setTest ] = useState()

  useEffect( async () => {

     getRequest( 'home' ).then( data => {
       console.log(data)       
       localStorage.setItem('my-test', JSON.stringify(response));
     })
     .catch(err => {console.log(err);});
      
      
      var data = localStorage.getItem('my-test')
      var data2 = JSON.parse(data)
      var data3 = data2.projects
      //setTest(JSON.parse(data))
      //console.log(JSON.parse(data));
      var data4 = data3[0].tastks[0];

      setTest(data)
      //console.log(test);
      //console.log(data4)
  }, []) 


  const list = [
    {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
    },
    {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
    },
    {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
    },
    {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
    },
    {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
    },
    {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
    },
    {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
    },
    {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
    },
    {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
    },
    {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
    },
    //...  more items
    ]

  return (
    <View style={ui_theme.mainBody}>

      <ScrollView
        contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              
              
              <ListItem.Content>
                <View style={ui_theme.SectionStyleRow}>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Title>{l.name}</ListItem.Title>
                </View>
                <Image /* source={require('../images/rating.png')} */ style={ui_theme.demoImage}/>
                <Text style={ui_theme.SmallSpan}>1,500 Views</Text>
                <Text style={ui_theme.SmallSpan} onPress={() => navigation.navigate('Comments')}>View all 17 Comments</Text>
                <Text style={ui_theme.SmallSpan}>22 Hours Ago</Text>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
    
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});