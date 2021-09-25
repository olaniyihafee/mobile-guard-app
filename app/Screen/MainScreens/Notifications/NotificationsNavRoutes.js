import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import NotificationsPage from './NotificationsScreens/Notifications'; //slight variation bcos the notification contains notification from expo
import EachNotification from './NotificationsScreens/EachNotification';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../common-codes/config/ui_theme'

const Stack = createStackNavigator();

const NotificationsNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Notifications"
    screenOptions={{
      headerMode: 'screen',
      headerTintColor: SECONDARY_COLOR,
      headerStyle: { backgroundColor: 'white' },
    }}
  >      
      <Stack.Screen
        name="Notifications"
        component={NotificationsPage}
      />

    <Stack.Screen
            name="EachNotification"
            component={EachNotification}
          />
    </Stack.Navigator>
  );
};

export default NotificationsNavRoutes