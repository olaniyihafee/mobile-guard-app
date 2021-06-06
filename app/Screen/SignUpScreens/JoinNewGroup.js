
import React, {useState, createRef} from 'react';
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

import { SearchBar, 
  ListItem, 
  Avatar 
} from 'react-native-elements';


import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import API_URI from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const JoinNewGroup = ({navigation}) => {

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
    <View style={{ flex: 1, height}}>
      
        
          <KeyboardAvoidingView enabled>
            <View style={{ flex: 1, position: 'relative', width: '100%', backgroundColor: '#FFA500',}}>
              
            <View style={ui_theme.SectionStyleCentered}>
              <Text style={ui_theme.Heading}>
                Welcome
              </Text>    
              <Text style={ui_theme.SubHeading}>
                Mr Jung
              </Text>    
              <Text style={ui_theme.Paragraph}>
                This are Groups closest to your vicinity that you may like to Join
              </Text>      
            </View>

            <View style={ui_theme.SectionStyleRow}>
              <Text style={ui_theme.Span}>
                Find Group
              </Text>    
              <Text style={ui_theme.Span}>
                Create New Group
              </Text>    
              <SearchBar
                placeholder="Type Here..."
                /*onChangeText={this.updateSearch}
                 value={search} */
                />     
            </View> 
            
            </View>           
            
            <ScrollView
            scrollEnabled={true}
              contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
              {
                list.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <Avatar source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                      <ListItem.Title>{l.name}</ListItem.Title>
                      <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            </ScrollView>

            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              See More
            </Text>
          </KeyboardAvoidingView>
        </View>
      
  );
};
export default JoinNewGroup;

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
