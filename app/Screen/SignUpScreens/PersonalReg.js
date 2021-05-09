// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
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

import API_URI from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const LoginScreen = ({navigation}) => {
  /*
  const [setUserName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRetypedPassword, setUserRetypedPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

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
    let dataToSend = {user_email: userEmail, user_password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch(API_URI, {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          console.log(responseJson.data[0].user_id);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  */

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

            <View style={ui_theme.SectionStyleRow}>
              <TextInput
                style={styles.inputStyle}
                //onChangeText={(UserEmail) => setUserName(UserEmail)}
                placeholder="Enter Your Name" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                //onSubmitEditing={() =>
                // passwordInputRef.current && passwordInputRef.current.focus()
                //}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={ui_theme.SectionStyleRow}>
              <TextInput
                style={styles.inputStyle}
                //onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                //ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <View style={ui_theme.SectionStyleRow}>
              <TextInput
                style={styles.inputStyle}
                //onChangeText={(UserPassword) => setUserRetypedPassword(UserPassword)}
                placeholder="Retype Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                //ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <View style={ui_theme.SectionStyleRow}>

              <Text
                style={styles.registerTextStyle}
                onPress={() => navigation.navigate('ForgotPassword')}>
                forgot password
              </Text>
              <CheckBox
                style={styles.registerTextStyle}>
                forgot password
              </CheckBox>

            </View>

            {/*
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null} */}

            

            <View style={ui_theme.SectionStyleRow}>    

              <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={ui_theme.s_buttonTextStyle}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ui_theme.p_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('MainNavRoutes')}>
                <Text style={ui_theme.p_buttonTextStyle}>Ok</Text>
              </TouchableOpacity>
              
            </View>
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

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
