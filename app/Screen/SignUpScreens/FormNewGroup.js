// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
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

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import API_URI from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const FormNewGroup = ({navigation}) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [userProfilePics, setUserProfilePics] = useState(false);
  const [image, setImagePlaceholder] = useState();

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
              <Text style={ui_theme.SubHeading}>
                Create New Group
              </Text>  
            </View>

            <View style={ui_theme.SectionStyleColumn}>
            <TextInput
                style={styles.inputStyle}
                /* onChangeText={setUserEmail} */
                placeholder="Enter Group Name" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                /* ref={passwordInputRef} */
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />

              <TextInput
                style={styles.textAreaStyle}
               /*  onChangeText={setUserPassword} */
                placeholder="Enter What Group is About" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                /* ref={passwordInputRef} */
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
                multiline={true}
                numberOfLines={4}
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
              <TouchableOpacity
                style={ui_theme.p_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('MainNavRoutes')}>
                <Text style={ui_theme.p_buttonTextStyle}>Submit</Text>
              </TouchableOpacity>  
              <TouchableOpacity
                style={ui_theme.p_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('MainNavRoutes')}>
                <Text style={ui_theme.p_buttonTextStyle}>Skip</Text>
              </TouchableOpacity>              
            </View>
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default FormNewGroup;

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
  textAreaStyle: {
    width: '90%',
    height: '120px',
    marginBottom: 40,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
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
