// Import React and Component
import React, {useState, useEffect, createRef,useRef} from 'react';
import {
  StyleSheet,TextInput,View,Text,ScrollView,
  Image,Keyboard,TouchableOpacity,KeyboardAvoidingView,
  FlatList,SafeAreaView, Modal, Dimensions, Platform
} from 'react-native';

import { 
  SearchBar, 
  ListItem, 
  Avatar,
  Button, CheckBox
} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../../../Components/Loader';

import API_URI from '../../../../common-codes/config/api'
import { getRequest } from '../../../../common-codes/config/api'
import {ui_theme} from '../../../../common-codes/config/ui_theme'


const Groups = ({navigation}) => {
  
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);//used for the flatlist
  const [masterDataSource, setMasterDataSource] = useState([]);//used for the flatlist
  const [selectedGroupsList, setSelectedGroupsList] = useState([]);
  const [popupContent, setPopupContent] = useState([]); //used for setting the content of the popup on every click

  const [isSelected, setSelection] = useState(false)
  const [image, setTestImage] = useState([]);
  
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const [visible, setVisible] = useState("none"); //used for toggling overlay

  useEffect(async () => {

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
      var read = getRequest('/home', LengthSoFar)
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
          onPress={() => getItem(item)}
          style={{flex: 1,
                  width: '25%',
                  height: 100,
                  borderColor: '#7DE24E',
                  //backgroundColor: 'yellow'
                  }}>

            <View style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderColor: '#7DE24E',
                  //backgroundColor: 'red'
                }}>
              
                <Image
                  source={{uri: item.images[0]}}            
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                    //backgroundColor: 'blue'
                  }}
                  />    

            </View>

      </TouchableOpacity>
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

  const isChecked = (itemId) => {
    const isThere = selectedGroupsList.includes(itemId);
    return isThere;
  };

  const toggleChecked = (itemId) => {
    const addition = [...selectedGroupsList, itemId];

    if (() =>isChecked(itemId)) {
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
       
          <KeyboardAvoidingView enabled>
          
              <View style={{flex: 1}}>
                
                <FlatList                  
                  style={{maxHeight: windowHeight}}
                  data={filteredDataSource}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={ItemView}
                  numColumns={4}
                  /* onEndReachedThreshold={0.5}
                  onEndReached={info => {
                    loadMoreResults()
                  }}  */
                />
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
}
export default Groups


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
 