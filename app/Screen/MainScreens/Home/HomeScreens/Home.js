// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
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
} from 'react-native';
import {
  ListItem, 
  Avatar,
  Icon 
} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from '../../../Components/Loader';

import API_URI from '../../../../common-codes/config/api'
import {ui_theme} from '../../../../common-codes/config/ui_theme'

const Home = ({navigation}) => {

  const [ test, setTest ] = useState()

  useEffect( async () => {

     getRequest( 'home' ).then( data => {
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


 

    
    /* const initialiseList = async () => {

      // this is done for testing purposes - reset AsyncStorage on every app refresh
      await AsyncStorage.removeItem('saved_list');
  
      // get current persisted list items (will be null if above line is not removed)
      const curItems = await AsyncStorage.getItem('saved_list');
  
      if (curItems === null) {
        // no current items in AsyncStorage - fetch initial items
        json = fetchResults(0);
  
        // set initial list in AsyncStorage
        await AsyncStorage.setItem('saved_list', JSON.stringify(json));
  
      } else {
        // current items exist - format as a JSON object
        json = JSON.parse(curItems);
      }
  
      // update Redux store (Redux will ignore if `json` is same as current list items)
      dispatch({
        type: 'UPDATE_LIST_RESULTS',
        items: json
      });
    } */



    /* const persistResults = async (newItems) => {

      // get current persisted list items
      const curItems = await AsyncStorage.getItem('saved_list');
  
      // format as a JSON object
      let json = curItems === null
        ? {}
        : JSON.parse(curItems);
  
      // add new items to json object
      for (let item of newItems) {
        json.push(item);
      }
  
      // persist updated item list
      await AsyncStorage.setItem('saved_list', JSON.stringify(json));
  
      // update Redux store
      dispatch({
        type: 'UPDATE_LIST_RESULTS',
        items: json
      });
    } */



    /* const loadMoreResults = async info => {

      // if already loading more, or all loaded, return
      if (loadingMore || allLoaded)
        return
  
      // set loading more (also updates footer text)
      setLoadingMore(true);
  
      // get next results
      const newItems = fetchResults(totalItems);
  
      // mimic server-side API request and delay execution for 1 second
      await delay(1000);
  
      if (newItems.length === 0) {
        // if no new items were fetched, set all loaded to true to prevent further requests
        setAllLoaded(true);
      } else {
        // process the newly fetched items
        await persistResults(newItems);
      }
  
      // load more complete, set loading more to false
      setLoadingMore(false);
    } */



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

          <View>
            <Icon></Icon>
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
              {item.message}
              
            </Text>
          </View>    

          <Image
            source={{uri: item.imgurl}}            
            style={{
              width: '100%',
              minHeight: 200,
              resizeMode: 'contain'
            }}
          /> 

          <View>
            <Icon></Icon>
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
              {item.message}              
            </Text>
          </View>    
      
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
    <View style={ui_theme.mainBody}>

      <ScrollView
        contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              
              
              <ListItem.Content>
                <View style={ui_theme.SectionStyleRow}>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Title>{l.name}</ListItem.Title>
                </View>
                <Image /* source={require('../images/rating.png')} */ style={ui_theme.demoImage}/>
                <Text style={ui_theme.SmallSpan}>1,500 Views</Text>
                <Text style={ui_theme.SmallSpan} onPress={() => navigation.navigate('Comments')}>View all 17 Comments</Text>
                <Text style={ui_theme.SmallSpan}>22 Hours Ago</Text>
              </ListItem.Content>
            </ListItem>
          ))
        }

                <FlatList
                  data={filteredDataSource}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  renderItem={ItemView}
                  /* onEndReached={info => {
                    loadMoreResults(info);
                  }}
                  onEndReachedThreshold={0.01} */
                />
      </ScrollView>
    
    </View>
  );
};
export default Home;

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
