

/*import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  takePictureAsync()
  recordAsync()
  stopRecording()
  pausePreview()
  resumePreview()

  // ...
<Camera
  ref={ref => {
    this.camera = ref;
  }}
/>;
// ...
snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
  }
};
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}*/

//const styles = StyleSheet.create({ ... }); 



/* 
import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import { FloatingAction } from "react-native-floating-action";
import * as DocumentPicker from 'expo-document-picker';

import {ui_theme} from '../common-codes/config/ui_theme'

const New = () => {    

  const [visible, setVisible] = useState("none"); //used for toggling overlay  
  const [popupContent, setPopupContent] = useState([]); //used for setting the content of the popup on every click 
  
  const [image, setImagePlaceholder] = useState(); //used in document picker to hold image

      
      const actions = [
        {
          text: "Notification",
          icon: require("../image/a.jpg"),
          name: "Notification",
          position: 1,
          color: '#FFA500'
        },
        {
          text: "View",
          icon: require("../image/a.jpg"),
          name: "View",
          position: 2,
          color: '#FFA500'
        },
        {
          text: "Photo",
          icon: require("../image/a.jpg"),
          name: "Photo",
          position: 3,
          color: '#FFA500'
        },
        {
          text: "Record",
          icon: require("../image/a.jpg"),
          name: "Record",
          position: 4,
          color: 'Red'
        }
      ];

      const selectFile = async () => {
        // Opening Document Picker to select one file
        
          const { type, uri } = await DocumentPicker.getDocumentAsync(*/
            //{ type: "*/*", copyToCacheDirectory: true, multiple: true }
     /*     );
          if (type==='cancel'){
            return;
          }
         console.log('pickerResponse', uri)
    
         try {
           const fetchResponse = await fetch(uri)
          console.log('fetchResponse', fetchResponse)
          const blob =await fetchResponse.blob()
          console.log('blob', blob)
          setImagePlaceholder(fetchResponse.url)
         } catch (error){
           console.log('ERR: ' + error.message)
         }     
      };

      const photo =()=>{
        console.log('Photo Clicked')
      }
      const video =()=>{
        console.log('Video Clicked')
      }

      const fbAction = (theAction) => {
        if( theAction == "Record" ){photo()}
        else if( theAction == "Photo" ){toggleOverlay()}
      }


       //function to manage overlay
    const toggleOverlay = () => {
      if(visible==="none"){
        setVisible("flex")
        console.log(visible)
      }
      else setVisible("none")
      console.log(visible)
    };
  
    return (
      <View style={{ flex: 1 }}>

        <Text style={styles.example}>Floating Action example</Text>
          <FloatingAction
            actions={actions}
            color='#FFA500'
            onPressItem={(name, Actions) => { fbAction(name); 
            }}
          />
        <Text style={styles.example}>Floating Action example</Text>
        
        <View style={{position: "fixed",width: "100%", height:"100%", display: visible}}>

          <View style={{ backgroundColor: "#000000aa",width: "100%", height:"100%"}}> 
            <View style={styles.popupVisibleContainer}> 
            {popupContent != null ? (
              <View style={ui_theme.SectionStyleRow}>

                <View style={ui_theme.SectionStyleColumn} onPress={selectFile()}>
                  <Image
                    source={require("../image/a.jpg")}            
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                    }}
                    />
                  <Text>Select Image</Text>
                </View>
                  
                <View style={ui_theme.SectionStyleColumn}>
                  <Image
                    source={require("../image/a.jpg")}            
                    style={{
                      width: 40,
                      height: 40,
                      resizeMode: 'contain',
                    }}
                    />
                  <Text>Take Photo</Text>
                </View>

              </View>

                ):null}
              <Button title="Close Popup" onPress={toggleOverlay}  />
            </View>
          </View>   
                      
      </View>           

      </View>
    );
  
}

const styles = StyleSheet.create({
  popupVisibleContainer: {
    backgroundColor: "#ffffffff", 
    margin:"15%", marginTop:"30%",
    padding:40,
    borderRadius:10,
    width: "70%", 
    height:"60%"
  },
  container: {
    display: 'fixed',
    bottom: '50px'
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});

export default New; 

 */



//end of floating action button

/* import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Button } from 'react-native';
import Constants from 'expo-constants'
//import DATA from './data'

const DATA = {
  1: [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '4 Item',
  },
  {
    id: '33694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '22694a0f-3da1-471f-bd96-145571e29d73',
    title: '6 Item',
  }],
  2: [{
    id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 Item',
  },
  {
    id: '8ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8 Item',
  },
  {
    id: '98694a0f-3da1-471f-bd96-145571e29d72',
    title: '9 Item',
  },
  {
    id: '10694a0f-3da1-471f-bd96-145571e29d73',
    title: '10 Item',
  },
  {
    id: '11694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 Item',
  },
  {
    id: '12694a0f-3da1-471f-bd96-145571e29d73',
    title: '12 Item',
  }],
  
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>

    </View>
  );
}
const onEndReached = ({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas }) => ({ distanceFromEnd }) => {
  if (onLoad && page < 2) {
    setPage(2)
    setDatas([...DATA[1], ...DATA[2]])
  }
  setDistanceFromEnd(distanceFromEnd)
}

const TopBar = ({ offsetY, distanceFromEnd, setPage, flatlistRef, threshold }) => {
  const windowHeight = Dimensions.get('window').height;
  const [height, setHeight] = useState(0)
  const thresholdDividier = Number(threshold) === 0 ? 1 : threshold
  return (
    <View onLayout={({nativeEvent: { layout: {height}}}) => setHeight(height)} style={styles.topbar}>
      <View style={{ flex: 2 }}>
        <Text style={styles.topbartext}>{`TopBar height: ${height}`}</Text>
        <Text style={styles.topbartext}>{`window height: ${windowHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd: ${distanceFromEnd}`}</Text>
        <Text style={styles.topbartext}>{`window-(TopBar+statusBar): ${windowHeight - height - Constants.statusBarHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd / threshold(${threshold}): ${distanceFromEnd / thresholdDividier}`}</Text>
      </View>
      <View>
        <Button
          title="RESET"
          onPress={() => {
            setPage(1)
            flatlistRef.scrollToIndex({ index: 0 })
          }}
        />
      </View>
    </View>
  );
}

export default function App() {
  const initData = DATA[1]
  const [distanceFromEnd, setDistanceFromEnd] = useState(null)
  const [onLoad, setOnLoad] = useState(false)
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState(initData)
  const flatlistRef = useRef(null)
  const threshold = 1

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (page === 1) {
      setDatas(initData)
    }
    setOnLoad(true)
  }, [page])
  return (
    <SafeAreaView style={styles.container}>
      <TopBar distanceFromEnd={distanceFromEnd} setPage={setPage} flatlistRef={flatlistRef.current} threshold={threshold} />
      <FlatList
      style={{maxHeight: windowHeight}}
      scrollEnabled={true}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
        ref={flatlistRef}
        data={datas}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        onEndReached={onEndReached({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas })}
        onEndReachedThreshold={threshold}
      />
      {windowWidth > 900 ? <View style={{ width: 600 }}>{}</View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: '100%',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  topbar: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
  },
  topbartext: {
    color: 'white',
  },
  item: {
    backgroundColor: 'orange',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
}); */





/* import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Button } from 'react-native';
import Constants from 'expo-constants'
//import DATA from './data'

const DATA = {
  1: [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '4 Item',
  },
  {
    id: '33694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '22694a0f-3da1-471f-bd96-145571e29d73',
    title: '6 Item',
  }],
  2: [{
    id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 Item',
  },
  {
    id: '8ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8 Item',
  },
  {
    id: '98694a0f-3da1-471f-bd96-145571e29d72',
    title: '9 Item',
  },
  {
    id: '10694a0f-3da1-471f-bd96-145571e29d73',
    title: '10 Item',
  },
  {
    id: '11694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 Item',
  },
  {
    id: '12694a0f-3da1-471f-bd96-145571e29d73',
    title: '12 Item',
  }],
  
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const onEndReached = ({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas }) => ({ distanceFromEnd }) => {
  if (onLoad && page < 2) {
    setPage(2)
    setDatas([...DATA[1], ...DATA[2]])
  }
  setDistanceFromEnd(distanceFromEnd)
}

const TopBar = ({ offsetY, distanceFromEnd, setPage, flatlistRef, threshold }) => {
  const windowHeight = Dimensions.get('window').height;
  const [height, setHeight] = useState(0)
  const thresholdDividier = Number(threshold) === 0 ? 1 : threshold
  return (
    <View onLayout={({nativeEvent: { layout: {height}}}) => setHeight(height)} style={styles.topbar}>
      <View style={{ flex: 2 }}>
        <Text style={styles.topbartext}>{`TopBar height: ${height}`}</Text>
        <Text style={styles.topbartext}>{`window height: ${windowHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd: ${distanceFromEnd}`}</Text>
        <Text style={styles.topbartext}>{`window-(TopBar+statusBar): ${windowHeight - height - Constants.statusBarHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd / threshold(${threshold}): ${distanceFromEnd / thresholdDividier}`}</Text>
      </View>
      <View>
        <Button
          title="RESET"
          onPress={() => {
            setPage(1)
            flatlistRef.scrollToIndex({ index: 0 })
          }}
        />
      </View>
    </View>
  );
}

export default function App() {
  const initData = DATA[1]
  const [distanceFromEnd, setDistanceFromEnd] = useState(null)
  const [onLoad, setOnLoad] = useState(false)
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState(initData)
  const flatlistRef = useRef(null)
  const threshold = 1

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (page === 1) {
      setDatas(initData)
    }
    setOnLoad(true)
  }, [page])
  return (
    <SafeAreaView style={styles.container}>
      <TopBar distanceFromEnd={distanceFromEnd} setPage={setPage} flatlistRef={flatlistRef.current} threshold={threshold} />
      <FlatList
      style={{maxHeight: windowHeight}}
      scrollEnabled={true}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
        ref={flatlistRef}
        data={datas}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        onEndReached={onEndReached({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas })}
        onEndReachedThreshold={threshold}
      />
      {windowWidth > 900 ? <View style={{ width: 600 }}>{}</View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: '100%',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  topbar: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
  },
  topbartext: {
    color: 'white',
  },
  item: {
    backgroundColor: 'orange',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});



 */


/* 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
      {id:1,  name: "Mark Doe",   date:"12 jan", time:'11:14 am', image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
      {id:2,  name: "Clark Man",  date:"12 jul", time:'15:58 am', image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
      {id:3,  name: "Jaden Boor", date:"12 aug", time:'12:45 am', image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
      {id:4,  name: "Srick Tree", date:"12 feb", time:'08:32 am', image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
      {id:5,  name: "John Doe",   date:"12 oct", time:'07:45 am', image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
      {id:6,  name: "John Doe",   date:"12 jan", time:'09:54 am', image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
      {id:8,  name: "John Doe",   date:"12 jul", time:'11:22 am', image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
      {id:9,  name: "John Doe",   date:"12 aug", time:'13:33 am', image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
      {id:10, name: "John Doe",   date:"12 oct", time:'11:58 am', image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
      {id:11, name: "John Doe",   date:"12 jan", time:'09:28 am', image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ],
      ids: [],
    };
  }

  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };

  toggleChecked = (itemId) => {
    const ids = [...this.state.ids, itemId];

    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
      console.log(`inside if statement ${[...this.state.ids]}`)
    } else {
      this.setState({
        ...this.state,
        ids,
      });
      console.log(`inside else statement ${[...this.state.ids]}`)
    }
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginRight: 5, width: 14, height: 14 },
                ]}
                source={{
                  uri: 'https://img.icons8.com/small/14/000000/double-tick.png',
                }}
              />
              <Text style={styles.time}>
                {item.date} {item.time}
              </Text>
            </View>
          </View>
          <CheckBox
            // iconRight
            title="SMS"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.isChecked(item.id)}
            onPress={() => this.toggleChecked(item.id)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 26,
            color: '#0080ff',
            textAlign: 'center',
            marginBottom: 30,
            marginTop: 10,
          }}
        >
          Testing check box
        </Text>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});

export default App;

/* import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Button } from 'react-native';
import Constants from 'expo-constants'
//import DATA from './data'

const DATA = {
  1: [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '4 Item',
  },
  {
    id: '33694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '22694a0f-3da1-471f-bd96-145571e29d73',
    title: '6 Item',
  }],
  2: [{
    id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 Item',
  },
  {
    id: '8ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8 Item',
  },
  {
    id: '98694a0f-3da1-471f-bd96-145571e29d72',
    title: '9 Item',
  },
  {
    id: '10694a0f-3da1-471f-bd96-145571e29d73',
    title: '10 Item',
  },
  {
    id: '11694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 Item',
  },
  {
    id: '12694a0f-3da1-471f-bd96-145571e29d73',
    title: '12 Item',
  }],
  
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>

    </View>
  );
}
const onEndReached = ({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas }) => ({ distanceFromEnd }) => {
  if (onLoad && page < 2) {
    setPage(2)
    setDatas([...DATA[1], ...DATA[2]])
  }
  setDistanceFromEnd(distanceFromEnd)
}

const TopBar = ({ offsetY, distanceFromEnd, setPage, flatlistRef, threshold }) => {
  const windowHeight = Dimensions.get('window').height;
  const [height, setHeight] = useState(0)
  const thresholdDividier = Number(threshold) === 0 ? 1 : threshold
  return (
    <View onLayout={({nativeEvent: { layout: {height}}}) => setHeight(height)} style={styles.topbar}>
      <View style={{ flex: 2 }}>
        <Text style={styles.topbartext}>{`TopBar height: ${height}`}</Text>
        <Text style={styles.topbartext}>{`window height: ${windowHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd: ${distanceFromEnd}`}</Text>
        <Text style={styles.topbartext}>{`window-(TopBar+statusBar): ${windowHeight - height - Constants.statusBarHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd / threshold(${threshold}): ${distanceFromEnd / thresholdDividier}`}</Text>
      </View>
      <View>
        <Button
          title="RESET"
          onPress={() => {
            setPage(1)
            flatlistRef.scrollToIndex({ index: 0 })
          }}
        />
      </View>
    </View>
  );
}

export default function App() {
  const initData = DATA[1]
  const [distanceFromEnd, setDistanceFromEnd] = useState(null)
  const [onLoad, setOnLoad] = useState(false)
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState(initData)
  const flatlistRef = useRef(null)
  const threshold = 1

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (page === 1) {
      setDatas(initData)
    }
    setOnLoad(true)
  }, [page])
  return (
    <SafeAreaView style={styles.container}>
      <TopBar distanceFromEnd={distanceFromEnd} setPage={setPage} flatlistRef={flatlistRef.current} threshold={threshold} />
      <FlatList
      style={{maxHeight: windowHeight}}
      scrollEnabled={true}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
        ref={flatlistRef}
        data={datas}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        onEndReached={onEndReached({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas })}
        onEndReachedThreshold={threshold}
      />
      {windowWidth > 900 ? <View style={{ width: 600 }}>{}</View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: '100%',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  topbar: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
  },
  topbartext: {
    color: 'white',
  },
  item: {
    backgroundColor: 'orange',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
}); */





/* import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, Button } from 'react-native';
import Constants from 'expo-constants'
//import DATA from './data'

const DATA = {
  1: [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: '4 Item',
  },
  {
    id: '33694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '22694a0f-3da1-471f-bd96-145571e29d73',
    title: '6 Item',
  }],
  2: [{
    id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 Item',
  },
  {
    id: '8ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8 Item',
  },
  {
    id: '98694a0f-3da1-471f-bd96-145571e29d72',
    title: '9 Item',
  },
  {
    id: '10694a0f-3da1-471f-bd96-145571e29d73',
    title: '10 Item',
  },
  {
    id: '11694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 Item',
  },
  {
    id: '12694a0f-3da1-471f-bd96-145571e29d73',
    title: '12 Item',
  }],
  
};

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const onEndReached = ({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas }) => ({ distanceFromEnd }) => {
  if (onLoad && page < 2) {
    setPage(2)
    setDatas([...DATA[1], ...DATA[2]])
  }
  setDistanceFromEnd(distanceFromEnd)
}

const TopBar = ({ offsetY, distanceFromEnd, setPage, flatlistRef, threshold }) => {
  const windowHeight = Dimensions.get('window').height;
  const [height, setHeight] = useState(0)
  const thresholdDividier = Number(threshold) === 0 ? 1 : threshold
  return (
    <View onLayout={({nativeEvent: { layout: {height}}}) => setHeight(height)} style={styles.topbar}>
      <View style={{ flex: 2 }}>
        <Text style={styles.topbartext}>{`TopBar height: ${height}`}</Text>
        <Text style={styles.topbartext}>{`window height: ${windowHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd: ${distanceFromEnd}`}</Text>
        <Text style={styles.topbartext}>{`window-(TopBar+statusBar): ${windowHeight - height - Constants.statusBarHeight}`}</Text>
        <Text style={styles.topbartext}>{`distanceFromEnd / threshold(${threshold}): ${distanceFromEnd / thresholdDividier}`}</Text>
      </View>
      <View>
        <Button
          title="RESET"
          onPress={() => {
            setPage(1)
            flatlistRef.scrollToIndex({ index: 0 })
          }}
        />
      </View>
    </View>
  );
}

export default function App() {
  const initData = DATA[1]
  const [distanceFromEnd, setDistanceFromEnd] = useState(null)
  const [onLoad, setOnLoad] = useState(false)
  const [page, setPage] = useState(1)
  const [datas, setDatas] = useState(initData)
  const flatlistRef = useRef(null)
  const threshold = 1

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (page === 1) {
      setDatas(initData)
    }
    setOnLoad(true)
  }, [page])
  return (
    <SafeAreaView style={styles.container}>
      <TopBar distanceFromEnd={distanceFromEnd} setPage={setPage} flatlistRef={flatlistRef.current} threshold={threshold} />
      <FlatList
      style={{maxHeight: windowHeight}}
      scrollEnabled={true}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
        ref={flatlistRef}
        data={datas}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        onEndReached={onEndReached({ setDistanceFromEnd, onLoad, page, setPage, datas, setDatas })}
        onEndReachedThreshold={threshold}
      />
      {windowWidth > 900 ? <View style={{ width: 600 }}>{}</View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: '100%',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
  topbar: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
  },
  topbartext: {
    color: 'white',
  },
  item: {
    backgroundColor: 'orange',
    height: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});



 */ 