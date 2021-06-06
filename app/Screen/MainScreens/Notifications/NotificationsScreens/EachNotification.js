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
import {
  SearchBar,
  ListItem, 
  Avatar 
} from 'react-native-elements';

import API_URI from '../../../../common-codes/config/api'
import {ui_theme} from '../../../../common-codes/config/ui_theme'

const EachNotification = ({navigation}) => {  
  
  const [ test, setTest ] = useState()

  useEffect( async () => {

     getRequest().then( data => {
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


  return (
    <View style={ui_theme.mainBody}>

      <View style={ui_theme.SectionStyleRowEvenlySpaced}>
        <Image /* source={require('../images/rating.png')} */ style={ui_theme.demoImageSmall}/>
        <Image /* source={require('../images/rating.png')} */ style={ui_theme.demoImageSmall}/>        
      </View>  

      <View style={ui_theme.SectionStyleColumn}>
        <Text style={ui_theme.Span}>
          Lorem ipsum
        </Text>          
        <Text style={ui_theme.Span}>
          Lorem ipsum dolor sit amet, consectetur adipiscing  
        </Text>
      </View>       

      <View style={ui_theme.SectionStyleCentered}>
          <View style={ui_theme.SectionStyleRow}>
            <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={ui_theme.s_buttonTextStyle}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={ui_theme.s_buttonTextStyle}>Join</Text>
            </TouchableOpacity>
          </View>
          <View style={ui_theme.SectionStyleRow}>          
            <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={ui_theme.s_buttonTextStyle}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ui_theme.s_buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={ui_theme.s_buttonTextStyle}>Join</Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
  );
};
export default EachNotification;

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
