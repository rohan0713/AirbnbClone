import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../assets/colors/color";

function TripScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trips</Text>
      <View style={styles.divider}></View>
      <Text style={styles.subtitle}>No trips booked...yet!</Text>
      <Text style={styles.body}>
        Time to dust off your bags and start planning your next adventure
      </Text>
      <View style={styles.button}>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.textSearch}>Start Searching</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "300",
          }}
        >
          Can't find your reservations here?
        </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            marginHorizontal: 5,
            fontWeight: "bold",
          }}
        >
          Visit the Help Centre
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
    fontSize: 28,
    fontWeight: "500",
    marginTop: 80,
    marginHorizontal: 20,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "500",
    marginHorizontal: 20,
  },

  divider: {
    margin: 20,
    height: 0.8,
    backgroundColor: "lightgrey",
  },

  body: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
    fontWeight: "300",
  },

  searchButton: {
    alignItems: "center",
  },

  button: {
    borderColor: "black",
    borderWidth: 1,
    width: 150,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  textSearch: {
    padding: 15,
  },
});
export default TripScreen;
