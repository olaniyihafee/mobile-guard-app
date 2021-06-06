import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Notifications from './NotificationsScreens/Notifications';
import EachNotification from './NotificationsScreens/EachNotification';

const Stack = createStackNavigator();

const NotificationsNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Groups">      
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Notifications', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

    <Stack.Screen
            name="EachNotification"
            component={EachNotification}
            options={{
              title: 'EachNotification', //Set Header Title
              headerStyle: {
                backgroundColor: '#307ecc', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
    </Stack.Navigator>
  );
};

export default NotificationsNavRoutes