import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./app/screens/SplashScreen";
import HomeScreen from "./app/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./app/screens/ProfileScreen";
import Home from "./app/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "./app/assets/colors/color";
import ListingItem from "./app/screens/ListingItem";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="homPage"
    //     screenOptions={{ headerShown: false }}
    //   >
    //     <Stack.Screen name="home" component={HomeScreen} />
    //     <Stack.Screen name="splash" component={SplashScreen} />
    //     <Stack.Screen name="profile" component={ProfileScreen} />
    //     <Stack.Screen name="homPage" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
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
          component={HomeScreen}
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
          component={HomeScreen}
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
    </NavigationContainer>
  );
}
