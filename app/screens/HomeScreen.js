import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchContainer}>
          <Image margin={20} source={require("../assets/ic_search.png")} />
          <View>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Where to?
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
              }}
            >
              Anywhere | Any week | Add guests
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.filterIcon}>
          <Image source={require("../assets/ic_filter.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  filterIcon: {
    marginEnd: 20,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },

  searchContainer: {
    marginStart: 20,
    flex: 1,
    marginEnd: 20,
    height: 60,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
