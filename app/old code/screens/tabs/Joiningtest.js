import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Test1 from './Test1.js'
import  Test2 from './Test2.js'



const Tab = createBottomTabNavigator();
export default function TabComponents(){

    return (
        <Tab.Navigator screenOptions={{ headerShown: true }} >
            
            <Tab.Screen name="Test1" component={Test1} />
            <Tab.Screen name="Test2" component={Test2} />

        </Tab.Navigator>
    );
}
