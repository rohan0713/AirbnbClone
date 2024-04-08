import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { colors } from "../assets/colors/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={30}
            color="black"
            style={styles.bell}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            margin: 20,
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
            }}
            source={require("../assets/static/icon.png")}
          />
          <View
            style={{
              marginHorizontal: 15,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "400" }}>Harry Smith</Text>
            <Text style={{ fontWeight: 300, fontSize: 12 }}>Show Profile</Text>
          </View>
        </View>

        <View style={styles.divider}></View>

        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.title}>Settings</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <Feather name="info" size={20} color="black" />
          <Text>Personal Information</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="security" size={20} color="black" />
          <Text>Login & security</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="payments" size={20} color="black" />
          <Text>Payments and payouts</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="app-settings-alt" size={20} color="black" />
          <Text>Accessibility</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="folder-copy" size={20} color="black" />
          <Text>Taxes</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="translate" size={20} color="black" />
          <Text>Translation</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="notifications" size={20} color="black" />
          <Text>Notifications</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons
            name="security-update-warning"
            size={20}
            color="black"
          />
          <Text>Privacy and sharing</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="wallet-travel" size={20} color="black" />
          <Text>Travel for work</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            marginVertical: 30,
            marginHorizontal: 20,
          }}
        >
          <Text style={styles.title}>Support</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="question-answer" size={20} color="black" />
          <Text>Visit the Help Center</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="medical-services" size={20} color="black" />
          <Text>Get help with a safety issue</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <FontAwesome5 name="airbnb" size={20} color="black" />
          <Text>How Airbnb works</Text>
        </View>
        <View style={styles.divider}></View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            gap: 20,
          }}
        >
          <MaterialIcons name="edit" size={20} color="black" />
          <Text>Give us feedback</Text>
        </View>
        <View style={styles.divider}></View>

        <Text
          style={{
            fontSize: 16,
            margin: 20,
            color: "red",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Log out
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "500",
  },

  bell: {
    marginTop: 5,
  },

  divider: {
    margin: 20,
    height: 0.8,
    backgroundColor: "lightgrey",
  },
});

export default ProfileScreen;
