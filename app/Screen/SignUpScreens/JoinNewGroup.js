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
  FlatList,
  SafeAreaView
} from 'react-native';

import { 
  SearchBar, 
  ListItem, 
  Avatar 
} from 'react-native-elements';


import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import API_URI from '../../common-codes/config/api'
import { getRequest } from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const JoinNewGroup = ({navigation}) => {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [image, setTestImage] = useState([]);
  

  const list = [
    {
    id: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'Amy Farha'
    },
    {
      id: 'juniper lee',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'juniper lee'
    },
    {
      id: 'alvin and the chip monk',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'alvin and the chip monk'
    },
    {
      id: 'gurumongo',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'gurumongo'
    },
    {
      id: 'shevetlana',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'shevetlana'
    },
    {
      id: 'bruce almighthy',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'bruce almighthy'
    },
    {
      id: 'lex luthor',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'lex luthor'
    },
    {
      id: 'Chris avans',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'Chris avans'
    },
    {
      id: 'bondocks',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'bondocks'
    },
    {
      id: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'Chris Jackson'
    },
    ]

    useEffect(() => {
      getRequest('/getimages')
        .then((responseJson) => {
          console.log(responseJson);
          const bou = responseJson;
          console.log(bou)
          setFilteredDataSource(bou);
          setMasterDataSource(bou);
          //setTestImage(bou);
        })
        .catch((error) => {
          console.error(error);
        });
  
        //setFilteredDataSource(list);
        //setMasterDataSource(list);
    }, []); 

    const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.message}
          {/*{'.'}
          {item.title.toUpperCase()}*/}
        </Text> 
        <Image
          source={{uri: item.imgurl}}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
            margin: 30,
          }}
        /> 
              
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
    

  return (
    <View style={{ flex: 1}}>
      <Image
          source={{uri: image}}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
            margin: 30,
          }}
        /> 
      
        
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
                 value={search}  */
               />     
            </View> 
            
            </View>           
            
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container}>
                <SearchBar
                  round
                  searchIcon={{ size: 24 }}
                  onChangeText={(text) => searchFilterFunction(text)}
                  onClear={(text) => searchFilterFunction('')}
                  placeholder="Type Here..."
                  value={search}
                />
                <FlatList
                  data={filteredDataSource}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  renderItem={ItemView}
                />
              </View>
            </SafeAreaView>

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
 

/* import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList, Image, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  const list = [
    {
    id: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'Amy Farha'
    },
    {
      id: 'juniper lee',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'juniper lee'
    },
    {
      id: 'alvin and the chip monk',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'alvin and the chip monk'
    },
    {
      id: 'gurumongo',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'gurumongo'
    },
    {
      id: 'shevetlana',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'shevetlana'
    },
    {
      id: 'bruce almighthy',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'bruce almighthy'
    },
    {
      id: 'lex luthor',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'lex luthor'
    },
    {
      id: 'Chris avans',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'Chris avans'
    },
    {
      id: 'bondocks',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    title: 'bondocks'
    },
    {
      id: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    title: 'Chris Jackson'
    },
    ]

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

      setFilteredDataSource(list);
        setMasterDataSource(list);
  }, []); 

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
        <Button> this is the end</Button>
        <Image
          source={require('../../Image/aboutreact.png')}
          style={{
            width: 80,
            height: 80,
            resizeMode: 'contain',
            margin: 30,
          }}
        />
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default App;
 */