// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
//import DocumentPicker from 'expo';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  CheckBox,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import { PostRequest } from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const PersonalReg = ({navigation}) => {

  const [userAppelation, setUserAppelation] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetypedPassword, setUserRetypedPassword] = useState('');
  const [userProfilePics, setUserProfilePics] = useState(false);

 // const [isSelected, setUserProfilePics] = useState();

  const [image, setImagePlaceholder] = useState();

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef(); 


  const selectFile = async () => {
    // Opening Document Picker to select one file
    
      const { type, uri } = await DocumentPicker.getDocumentAsync(
        { type: "*/*", copyToCacheDirectory: true }
      );
      if (type==='cancel'){
        return;
      }
     console.log('pickerResponse', uri)

     try {
       const fetchResponse = await fetch(uri)
      console.log('fetchResponse', fetchResponse)
      const blob =await fetchResponse.blob()
      console.log('blob', blob)
      setUserProfilePics(blob)
      setImagePlaceholder(fetchResponse.url)
     } catch (error){
       console.log('ERR: ' + error.message)
     }     
  };
  
  
  const handleSubmitPress = () => {
   setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);

    let formData = new FormData()

        /* formData.append('appelation', userAppelation)*/
        formData.append('name', userName)
        formData.append('email', userEmail)
        formData.append('password', userPassword)
        formData.append('passwordConfirmation', userRetypedPassword) 
        formData.append('multi-files', userProfilePics) 

        console.log(...formData)
        

    PostRequest('/signup', 'POST', formData )
      .then((responseJson) => {
        //Hide Loader
        //setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.message == 'OK') {
          //AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          //console.log(responseJson.data[0].user_id);
          navigation.navigate('JoinNewGroup');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });
  }; 
  

  return (
    <View style={ui_theme.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>

        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../Image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>

            <View style={ui_theme.SectionStyleColumn}>

            {/* <CheckBox

              >
              forgot password
              </CheckBox>
              <CheckBox
                center
                title='Click Here'
                 checked={setUserAppelation('Mrs')} 
              /> */}

              <TextInput
                style={styles.inputStyle}
                onChangeText={setUserName}
                placeholder="Enter Username" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
                          
              <TextInput
                style={styles.inputStyle}
                onChangeText={setUserEmail}
                placeholder="Enter Email" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />

              <TextInput
                style={styles.inputStyle}
                onChangeText={setUserPassword}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />            
            
              <TextInput
                style={styles.inputStyle}
                onChangeText={setUserRetypedPassword}
                placeholder="Retype Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
 
            <View style={ui_theme.SectionStyleCentered}>
              <TouchableOpacity
                style={ui_theme.buttonStyle}
                activeOpacity={0.5}
                 onPress={selectFile}  >
                  
                   {image != null ? (
                      <Image
                      source={{uri: image}}
                      style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain',
                        margin: 30,
                      }}
                    />
                    ) :
                    <Image
                    source={require('../../Image/aboutreact.png')}
                    style={{
                      width: 80,
                      height: 80,
                      resizeMode: 'contain',
                      margin: 30,
                    }}
                  /> }
                      
              </TouchableOpacity>      
            </View>


            <View style={ui_theme.SectionStyleRow}>

              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('ForgotPassword')}>
                forgot password
              </Text>
              {/* <CheckBox
                style={styles.registerTextStyle}>
                forgot password
              </CheckBox> */}

            </View>

            {/*
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null} */}

            

            <View style={ui_theme.SectionStyleRow}>    

              <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                handleSubmitPress
                onPress={handleSubmitPress}
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={ui_theme.s_buttonTextStyle}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ui_theme.p_buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={ui_theme.p_buttonTextStyle}>Ok</Text>
              </TouchableOpacity>
              
            </View>
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default PersonalReg;

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
    width: '90%',
    height: '40px',
    marginBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
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
