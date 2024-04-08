import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import DescriptionScreen from "./DescriptionScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../assets/colors/color";
import InboxScreen from "./InboxScreen";
import TripScreen from "./TripScreen";

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.activeTint,
        tabBarInactiveTintColor: colors.inactiveTint,
        tabBarLabelStyle: {
          fontSize: 11,
          paddingBottom: 5,
        },
        tabBarStyle: { paddingVertical: 5 },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="search"
              size={focused ? 18 : 14}
              color={focused ? colors.activeTint : colors.inactiveTint}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlists"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="heart"
              size={focused ? 18 : 14}
              color={focused ? colors.activeTint : colors.inactiveTint}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={TripScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="airbnb"
              size={focused ? 18 : 14}
              color={focused ? colors.activeTint : colors.inactiveTint}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbox-outline"
              size={focused ? 18 : 14}
              color={focused ? colors.activeTint : colors.inactiveTint}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="person"
              size={focused ? 18 : 14}
              color={focused ? colors.activeTint : colors.inactiveTint}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
