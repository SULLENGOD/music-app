import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InfoSong from "../screens/InfoSong";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../screens/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top Songs"
        component={HomeScreen}
        options={{
          title: "Weekly Top Tracks",
          headerStyle: {
            backgroundColor: "#162238",
            borderBottomColor: "#162238",
            shadowColor: "#162238",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Details"
        component={InfoSong}
        options={{
          headerStyle: {
            backgroundColor: "#162238",
            borderBottomColor: "#162238",
            shadowColor: "#162238",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Top Songs"
        component={Profile}
        options={{
          title: "My Profile",
          headerStyle: {
            backgroundColor: "#162238",
            borderBottomColor: "#162238",
            shadowColor: "#162238",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Details"
        component={InfoSong}
        options={{
          headerStyle: {
            backgroundColor: "#162238",
            borderBottomColor: "#162238",
            shadowColor: "#162238",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#162238"
      inactiveColor="#a6a6a6"
      shifting="true"
      theme={{ colors: { secondaryContainer: "transparent" } }}
      barStyle={{
        backgroundColor: "#fff",
        height: 65,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
