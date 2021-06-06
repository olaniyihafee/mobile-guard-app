
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
  

  return (
    <View style={ui_theme.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>

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

            <View style={ui_theme.SectionStyleCentered}>
              <Text style={ui_theme.SubHeading}>
                Login
              </Text>
            </View>               

            <View style={ui_theme.SectionStyleColumn}>
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
              <Text
                style={styles.registerTextStyle}
                /* onPress={() => navigation.navigate('ForgotPassword')} */>
                forgot password
              </Text>
              <CheckBox
                style={styles.registerTextStyle}>
                forgot password
              </CheckBox>
            </View>

            

            <View style={ui_theme.SectionStyleRow}>    

              <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                /* onPress={() => navigation.navigate('SignUpScreen')} */>
                <Text style={ui_theme.s_buttonTextStyle}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ui_theme.p_buttonStyle}
                activeOpacity={0.5}
                /* onPress={() => navigation.navigate('MainNavRoutes')} */>
                <Text style={ui_theme.p_buttonTextStyle}>Ok</Text>
              </TouchableOpacity>
              
            </View>
            
          </KeyboardAvoidingView>
        
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
