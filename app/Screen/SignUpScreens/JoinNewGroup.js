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
  SafeAreaView, Modal, Dimensions
} from 'react-native';

import { 
  SearchBar, 
  ListItem, 
  Avatar,
  Button, CheckBox
} from 'react-native-elements';


import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../Components/Loader';

import API_URI from '../../common-codes/config/api'
import { PostRequest } from '../../common-codes/config/api'
import {ui_theme} from '../../common-codes/config/ui_theme'

const JoinNewGroup = ({navigation}) => {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [selectedGroupsList, setSelectedGroupsList] = useState([]);
  const [popupContent, setPopupContent] = useState([]);

  const [isSelected, setSelection] = useState(false)
  const [image, setTestImage] = useState([]);
  
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  
  const [visible, setVisible] = useState("none");  
    useEffect(() => {       
      initialiseList()
      .then((responseJson) => {
        console.log(responseJson);
        const bou = responseJson;
        console.log(bou)
        
        //setTestImage(bou[6].imgurl)
        setFilteredDataSource(bou);
        setMasterDataSource(bou);
        setTestArray(bou)

        console.log('master: ' +masterDataSource.length)
        //setTestImage(bou);
      })
      .catch((error) => {
        console.error(error);
      });

        //setFilteredDataSource(list);
        //setMasterDataSource(list);
    }, []);   

  const windowHeight = Dimensions.get('window').height; //function to collect screen height for Flatlist easy scroll


    //function to manage overlay
    const toggleOverlay = () => {
      if(visible==="none"){
        setVisible("flex")
        console.log(visible)
      }
      else setVisible("none")
      console.log(visible)
    };
   
    //Fuctions for managing data from database and the once in Flatlist

    const initialiseList = async (listLengthSoFar) => {
      var LengthSoFar = listLengthSoFar
      var read = PostRequest('/register/join_new_groups', LengthSoFar)
        return read
    } 

    const persistResults = async (newItems) => {

      // get current persisted list items
      const curItems = await AsyncStorage.getItem('saved_list');
      //const curItems = []
  
      // format as a JSON object
      let json = curItems === null
        ? []
        : JSON.parse(curItems);

        console.log('inside persistResults newItems: ' +newItems)
        console.log('inside persistResults json: ' +json)
  
      // add new items to json object
      for (let item of newItems) {
        json.push(item);
      }
  
      // persist updated item list
      await AsyncStorage.setItem('saved_list', JSON.stringify(json));
  
      // update Redux store
      setFilteredDataSource(filteredDataSource => [filteredDataSource].concat(...json));
      setMasterDataSource(masterDataSource => [masterDataSource].concat(...json));
    } 

  //Flatlist functions

  const loadMoreResults = async info => {

    console.log('it entered into load more result')

      // if already loading more, or all loaded, return
      if (loadingMore || allLoaded)
        return
  
      // set loading more (also updates footer text)
      setLoadingMore(true);
  
      // get next results
      
      setMasterDataSource(masterDataSource)
      console.log(masterDataSource.length)
      const newItems = await initialiseList( masterDataSource.length );
  
      if (newItems === 0) {
        // if no new items were fetched, set all loaded to true to prevent further requests
        setAllLoaded(true);
      } else {
        //console.log('else newItems: ' +newItems.length)
        // process the newly fetched items
        await persistResults(newItems);
      }
  
      // load more complete, set loading more to false
      setLoadingMore(false); 
    } 



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

  //Flatlist items

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => getItem(item)}>

            <View style={{flex: 1,flexDirection: 'row'}}>
              
              <Image
                source={{uri: item.groupPicture}}            
                style={{
                  width: 80,
                  height: 80,
                  resizeMode: 'contain',
                  margin: 30,
                }}
                />    

              <View style={ui_theme.SectionStyleCentered}>
                <Text style={styles.itemStyle}>
                  {item.name}              
                </Text>
                <Text style={styles.itemStyle}>
                  {item.about}              
                </Text>
              </View>                
                
              <View style={[ui_theme.SectionStyleCentered, ui_theme.SectionFloatRight]}>
                <CheckBox
                  // iconRight
                  title="SMS"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.isChecked(item.name)}
                  onPress={() => this.toggleChecked(item.name)}
                />
              </View>
            </View>

      </TouchableOpacity>
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
    //alert('Id : ' + item.id + ' Title : ' + item.title);
    console.log('it entered here') 
    setPopupContent(item)
    toggleOverlay()
    
  };

  //Functions for the checkboxes inside the flatlist used to choose groups to join

  isChecked = (itemId) => {
    const isThere = selectedGroupsList.includes(itemId);
    return isThere;
  };

  toggleChecked = (itemId) => {
    const addition = [...selectedGroupsList, itemId];

    if (this.isChecked(itemId)) {
      setSelectedGroupsList(
        addition = selectedGroupsList.filter((name) => name !== itemId),
      );
      console.log(`inside if statement ${[...selectedGroupsList]}`)
    } else {
      setSelectedGroupsList(
        addition,
      );
      console.log(`inside else statement ${[...selectedGroupsList]}`)
    }
  };
    

  return (
        
    <View style={{ flex: 1}}>   
        <CheckBox 
          value={isSelected}
          onValueChanged={setSelection}
          title={'Jumong'}
          style={styles.checkbox}
        />
      
          <KeyboardAvoidingView enabled>
            <View style={{ flex: 1, position: "fixed"}}>
              
            <View style={[ui_theme.SectionStyleCentered, styles.solidBackground]}>
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
                Create New Group
              </Text>    
               <SearchBar
                  style={ui_theme.searchBar}
                  round
                  searchIcon={{ size: 24 }}
                  onChangeText={(text) => searchFilterFunction(text)}
                  onClear={(text) => searchFilterFunction('')}
                  placeholder="Type Here..."
                  value={search}
                />   
            </View> 
            
            </View>           
            
            
              <View style={{flex: 1,position: "relative",top:270}}>
                
                <FlatList                  
                  style={{maxHeight: windowHeight}}
                  data={filteredDataSource}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  renderItem={ItemView}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  onEndReached={info => {
                    loadMoreResults()
                  }} 
                />
              </View>

              <View style={[ui_theme.SectionFloatRight, { flex: 1,width: "100%", backgroundColor: "#ffffffff", position: "fixed", bottom: 0}]}>
                <Button title="Submit" style={ui_theme.p_buttonStyle} onPress={toggleOverlay} />
              </View>

            <View
              style={{position: "fixed",width: "100%", height:"100%", display: visible}}
              >
                <View style={{ backgroundColor: "#000000aa",width: "100%", height:"100%"}}> 
                  <View style={{ backgroundColor: "#ffffffff", margin:"15%", marginTop:"30%",padding:40,borderRadius:10,width: "70%", height:"60%"}}> 
                  {popupContent != null ? (
                    <View>
                      <Text>{popupContent.message}</Text>
                      <Image
                        source={{uri: popupContent.groupPicture}}            
                        style={{
                          width: 80,
                          height: 80,
                          resizeMode: 'contain',
                          margin: 30,
                        }}
                        />
                      </View>
                      ):null}
                    <Button title="Close Popup" onPress={toggleOverlay}  />
                  </View>
                </View>   
                           
            </View>           

          </KeyboardAvoidingView>
        </View>
      
  );
};
export default JoinNewGroup;

const styles = StyleSheet.create({
  solidBackground:{
    backgroundColor: '#ffffffff',
    zIndex:5
  },  
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