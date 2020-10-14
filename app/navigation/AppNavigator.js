import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
            tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account-outline" size={size} color={color} />
            ),
        }}    
    ></Tab.Screen>
    </Tab.Navigator>
  );
export default AppNavigator;