import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeNavRoutes from './Home/HomeNavRoutes';
import GroupsNavRoutes from './Groups/GroupsNavRoutes';
import NotificationsNavRoutes from './Notifications/NotificationsNavRoutes';
//import YouNavRoutes from './You/YouNavRoutes';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../common-codes/config/ui_theme'

const Tab = createBottomTabNavigator();

const MainNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Tab.Navigator initialRouteName="Home">
      
      <Tab.Screen
        name="Home"
        component={HomeNavRoutes}
        options={{
          title: 'Home', //Set Header Title
          headerStyle: {
            backgroundColor: ' #FFA500', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      <Tab.Screen
        name="Groups"
        component={GroupsNavRoutes}
        options={{
          title: 'Groups', //Set Header Title
          headerStyle: {
            backgroundColor: SECONDARY_COLOR, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsNavRoutes}
        options={{
          title: 'Notifications', //Set Header Title
          headerStyle: {
            backgroundColor: SECONDARY_COLOR, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      {/* <Tab.Screen
        name="Home"
        component={HomeNavRoutes}
        options={{
          title: 'Home', //Set Header Title
          headerStyle: {
            backgroundColor: SECONDARY_COLOR, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainNavRoutes