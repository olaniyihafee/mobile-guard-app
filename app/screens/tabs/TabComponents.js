import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home from './home/Home.js';
import  Groups from './groups/Groups.js';
import  Notifications from './notifications/Notifications.js';
import  You from './you/You.js';



const Tab = createBottomTabNavigator();
export default function TabComponents(){

    return (
        <Tab.Navigator screenOptions={{ headerShown: true }} >
            
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Groups" component={Groups} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="You" component={You} />

        </Tab.Navigator>
    );
}
