
import React, { Component, useState, useEffect } from 'react';
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

const New = () => {
    
      const [calls, setCalls] = useState( [
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
      ]);
      const [ids, setIds] = useState([]);

      useEffect(()=>{
        getChildChange(ids)
      }, [ids])

      const getChildChange = (loveids) => (
        console.log(`buyakasha ${loveids}`)
      )

  const isChecked = (itemId) => {
    const isThere = ids.includes(itemId);
    return isThere;
  };

  const toggleChecked = (itemId) => {
    const mention = [...ids, itemId];
    console.log(`if everything worked ${mention}`)

    if (isChecked(itemId)) {
      setIds(...mention, ids.filter((id) => id !== itemId))
      console.log(`inside if statement ${[...ids]}`)
    } else {
      //setIds(ids => [...ids].concat(...mention))
      setIds(ids => [...ids].concat(...mention))
      //setCalls(mention)
      console.log(ids)
      //console.log(calls)
      console.log(`if every worked ${mention}`)
    }
  };

  const renderItem = ({ item }) => {
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
            checked={isChecked(item.id)}
            onPress={() => toggleChecked(item.id)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  
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
          //extraData={this.state}
          data={calls}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={renderItem}
        />
      </View>
    );
  
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

export default New;

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