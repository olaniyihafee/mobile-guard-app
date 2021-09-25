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

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Camera } from 'expo-camera';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NotificationsPage = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  
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

      //setFilteredDataSource(list);
      //setMasterDataSource(list);

    /* registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    }; */
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
      var read = getRequest('/notifications', LengthSoFar)
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
                source={{uri: item.images[0]}}            
                style={{
                  width: 70,
                  height: 70,
                  margin: 3,
                  resizeMode: 'contain',
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
   /*  <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View> */

    <View style={{ flex: 1}}>   
       
          <KeyboardAvoidingView enabled>
          
              <View style={{flex: 1}}>
                
                <FlatList                  
                  style={{maxHeight: windowHeight, marginTop: 10}}
                  data={filteredDataSource}
                  keyExtractor={(item, index) => index.toString()}
                  ItemSeparatorComponent={ItemSeparatorView}
                  renderItem={ItemView}
                  numColumns={1}
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
export default NotificationsPage


// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

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
 