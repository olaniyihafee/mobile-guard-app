
import * as DocumentPicker from 'expo-document-picker';

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
  KeyboardAvoidingView, CheckBox
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import API_URI from '../../common-codes/config/api'
import { PostRequest } from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const FormNewGroup = ({route, navigation}) => {

  /* const { userEmail } = route.params */

  const [groupName, setGroupName] = useState('');
  const [about, setGroupAbout] = useState('');
  const [groupProfilePic, setGroupProfilePic] = useState('');
  
  const [image, setImagePlaceholder] = useState();

  const [errortext, setErrortext] = useState('');

  const submitNewGroup = async () => {

    console.log('it entered submit new Group area')

    setErrortext('');
    if (!groupName) {
      alert('Please fill Group Name');
      return;
    }
    if (!about) {
      alert('Please fill About Section');
      return;
    }
    //setLoading(true);

    let formData = new FormData()

        /* formData.append('appelation', userAppelation)*/
        formData.append('name', groupName)
        formData.append('about', about)        
        /* formData.append('email', userEmail) */
        formData.append('multi-files', groupProfilePic) 

        console.log(...formData)
        

    PostRequest('/register/form_new_group', formData )
      .then((responseJson) => {
        //Hide Loader
        //setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.message == 'OK') {
          navigation.navigate('MainNavRoutes');
        } else {
          setErrortext('Pick a Different Group Name');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });
  }

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
      setGroupProfilePic(blob)
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
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null} 
            <TextInput
                style={styles.inputStyle}
                onChangeText={setGroupName} 
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
                onChangeText={setGroupAbout} 
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

            <View style={ui_theme.SectionStyleColumn}>
              <Text style={ui_theme.SmallSubHeading}>Profile Picture</Text>
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
                onPress={() => submitNewGroup()}>
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
