import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import Groups from './GroupsScreens/Groups';
import EachGroup from './GroupsScreens/EachGroup';

const Stack = createStackNavigator();

const GroupsNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Groups">      
      <Stack.Screen
        name="Groups"
        component={Groups}
        options={{
          title: 'Groups', //Set Header Title
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
            name="EachGroup"
            component={EachGroup}
            options={{
              title: 'EachGroup', //Set Header Title
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

export default GroupsNavRoutes