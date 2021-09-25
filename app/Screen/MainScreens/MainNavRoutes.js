import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';
//import { getHeaderTitle } from '@react-navigation/elements';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
    <Tab.Navigator initialRouteName="Notifications"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } 
            else if (route.name === 'Groups') {
              iconName = focused ? 'group' : 'group';
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? 'bell' : 'bell';
            }

            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: SECONDARY_COLOR,
          inactiveTintColor: 'gray',
        }}>
      <Tab.Screen
        name="Home"
        component={HomeNavRoutes}
      />

      <Tab.Screen
        name="Groups"
        component={GroupsNavRoutes}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsNavRoutes}
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