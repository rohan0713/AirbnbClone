import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { colors } from "../assets/colors/color";
import { Ionicons } from "@expo/vector-icons";

function InboxScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <View style={styles.status}>
        <Ionicons name="chatbox-ellipses-outline" size={30} color="black" />
        <Text style={styles.body}>No new messages</Text>
        <Text style={styles.desc}>
          When you contact a Host or send a reservation request, you'll see your
          messages here.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  title: {
    marginTop: 80,
    marginHorizontal: 20,
    fontSize: 28,
    fontWeight: "500",
  },

  status: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  body: {
    marginVertical: 5,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },

  desc: {
    textAlign: "center",
    marginHorizontal: 30,
  },
});

export default InboxScreen;
