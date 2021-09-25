import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';  

// Import Screens
import Home from './HomeScreens/Home';
import Comments from './HomeScreens/Comments';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../common-codes/config/ui_theme'

const Stack = createStackNavigator();

const HomeNavRoutes = ({navigation}) => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: SECONDARY_COLOR,
        headerStyle: { backgroundColor: 'white' },
      }}
    >      
      <Stack.Screen
        name="Home"
        component={Home}
      />

    <Stack.Screen
      name="Comments"
      component={Comments}
    />
    </Stack.Navigator>
  );
};

export default HomeNavRoutes