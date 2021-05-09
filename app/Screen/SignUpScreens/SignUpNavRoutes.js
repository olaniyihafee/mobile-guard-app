// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import PersonalReg from './PersonalReg';
import JoinNewGroup from './JoinNewGroup';
import FormNewGroup from './FormNewGroup';

const Stack = createStackNavigator();

const SignUpNavRoutes = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="PersonalRegistration">
      <Stack.Screen
        name="PersonalRegistration"
        component={PersonalReg}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JoinNewGroup"
        component={JoinNewGroup}
        options={{
          title: 'JoinNewGroup', //Set Header Title
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
        name="FormNewGroup"
        component={FormNewGroup}
        options={{
          title: 'FormNewGroup', //Set Header Title
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

export default SignUpNavRoutes