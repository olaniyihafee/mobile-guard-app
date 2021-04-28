import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  M_G_fullscreen from './screens/M_G_fullscreen.js'
import  Welcome from './screens/Welcome.js'
import  Login from './screens/login/Login.js'
import  Signup from './screens/signup/Signup.js'

import  TabComponents from './screens/tabs/TabComponents'



const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: true }} >

            <AppStack.Screen name="Joining test" component={TabComponents} />
                
            <AppStack.Screen name="Login" component={Login} />

            <AppStack.Screen name="M_G_fullscreen" component={M_G_fullscreen} />
            <AppStack.Screen name="Welcome" component={Welcome} />
            <AppStack.Screen name="Signup" component={Signup} />
        </AppStack.Navigator>

    </NavigationContainer>
    );
}
