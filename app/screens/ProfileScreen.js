import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

import image1 from "../assets/static/ic_views.png";
import image2 from "../assets/static/ic_pool.png";
import image3 from "../assets/static/ic_omg.png";
import image4 from "../assets/static/ic_ski.png";
import image5 from "../assets/static/ic_lake.png";
import image6 from "../assets/static/ic_luxe.png";

const images = [image1, image2, image3, image4, image5, image6];

const items = [
  { id: 1, name: "Amazing view", icon: 0 },
  { id: 2, name: "Amazing pools", icon: 1 },
  { id: 3, name: "OMG!", icon: 2 },
  { id: 4, name: "Skiing", icon: 3 },
  { id: 5, name: "Lakes", icon: 4 },
  { id: 6, name: "Luxe", icon: 5 },
];

const renderItem = ({ item }) => (
  <View style={{ padding: 5, backgroundColor: "white", alignItems: "center" }}>
    <Image source={images[item.icon]} />
    <Text style={{ padding: 5 }}>{item.name}</Text>
  </View>
);

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },

  list: {
    top: 50,
    backgroundColor: "yellow",
  },
});

export default ProfileScreen;
