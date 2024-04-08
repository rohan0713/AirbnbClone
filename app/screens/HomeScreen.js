import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import ListingItem from "./ListingItem";
import { colors } from "../assets/colors/color";

const items = [
  { id: "1", name: "Amazing view", icon: "../assets/static/ic_views.png" },
  { id: "2", name: "Amazing pools", icon: "../assets/static/ic_pool.png" },
  { id: "3", name: "OMG!", icon: "../assets/static/ic_omg.png" },
  { id: "4", name: "Skiing", icon: "../assets/static/ic_ski.png" },
  { id: "5", name: "Lakes", icon: "../assets/static/ic_lake.png" },
];

const renderItem = ({ item }) => {
  <View style={{ padding: 10, flex: 1 }}>
    <Text>{item.name}</Text>
  </View>;
};

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.searchContainer} activeOpacity={0.8}>
          <Image
            margin={20}
            source={require("../assets/static/ic_search.png")}
          />
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
          <Image source={require("../assets/static/ic_filter.png")} />
        </View>
      </View>
      <ListingItem />
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
    backgroundColor: colors.light,
  },

  filterIcon: {
    marginEnd: 20,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    padding: 10,
  },

  searchContainer: {
    marginStart: 20,
    flex: 1,
    marginEnd: 20,
    height: 60,
    elevation: 8,
    backgroundColor: colors.light,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  list: {
    flex: 1,
    flexDirection: "row",
  },
});

export default HomeScreen;
