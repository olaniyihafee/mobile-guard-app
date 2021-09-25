import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Groups from './GroupsScreens/Groups';
import EachGroup from './GroupsScreens/EachGroup';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../common-codes/config/ui_theme'

const Stack = createStackNavigator();

const GroupsNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Groups"screenOptions={{
      headerMode: 'screen',
      headerTintColor: SECONDARY_COLOR,
      headerStyle: { backgroundColor: 'white' },
    }}
  >          
      <Stack.Screen
        name="Groups"
        component={Groups}
      />

    <Stack.Screen
            name="EachGroup"
            component={EachGroup}
          />
    </Stack.Navigator>
  );
};

export default GroupsNavRoutes