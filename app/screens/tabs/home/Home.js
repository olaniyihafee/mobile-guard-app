import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function navigateToGroups() {
    navigation.navigate("Groups");
}
  
  return (

  <View style={styles.entireContainer}>

    <View style={styles.eachPostContainer}>

      <View style={styles.headingContainer}> 
        <Image source={require('../../../assets/icon.png')}style={styles.groupIcon}/>       
        <Text style={styles.groupName}>Home</Text>
      </View>

      <View style={styles.postImgContainer}>        
        <Image source={require('../../../assets/icon.png')}style={styles.postImg}/>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerTxt}>Rate</Text>
        <Text style={styles.footerTxt}>Number of views</Text>
        <Text style={styles.footerTxt}>30 comments</Text>
        <Text style={styles.uploadtime}>22 hours ago</Text>
      </View>
      
    </View>

    <View style={styles.eachPostContainer}>

      <View style={styles.headingContainer}> 
        <Image source={require('../../../assets/icon.png')}style={styles.groupIcon}/>       
        <Text style={styles.groupName}>Home</Text>
      </View>

      <View style={styles.postImgContainer}>        
        <Image source={require('../../../assets/icon.png')}style={styles.postImg}/>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerTxt}>Rate</Text>
        <Text style={styles.footerTxt}>Number of views</Text>
        <Text style={styles.footerTxt}>30 comments</Text>
        <Text style={styles.uploadtime}>22 hours ago</Text>
      </View>
      
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({  
  entireContainer: {
    flex: 1,  
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  eachPostContainer: {
    flex: 1,   
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px',
    width: '100%'
  },
  headingContainer:{
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: '10px',    
    width: '100%'
  },
  groupIcon:{
    width: "25px",
    height:'25px',
  },
  groupName: {
    fontSize: '17px',
  },  
  postImgContainer: {
    flex: 8,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImg: {
    width: "100%",
    height:'100%',
    backgroundColor: 'green',
  },
  footerContainer: {
    flex: 2,    
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: "100%",
    padding: '30px',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: -5
  },
  footerTxt: {
    fontSize: '15px',
    margin: '3px',
  },  
  uploadtime: {
    fontSize: '12px',
    color: 'grey',
    display: 'fixed',
    bottom: '0px',
  }
});
