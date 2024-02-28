import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { colors } from "../assets/colors/color";
import { Response } from "../data/models/Response";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

function ListingItem() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("desc");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container} // add styles
      onPress={handlePress} // handle onPress event
      activeOpacity={0.9} // decrease opacity when pressed
    >
      <View style={styles.images}>
        <Image
          style={{
            width: "100%",
            height: 350,
          }}
          source={require("../assets/static/ic_prop.jpg")}
        />
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text
        style={{
          color: colors.inactiveTint,
          marginLeft: 20,
        }}
      >
        {item.body}
      </Text>
      <Text
        style={{
          color: colors.inactiveTint,
          marginLeft: 20,
        }}
      >
        {item.date}
      </Text>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 10,
          fontWeight: "bold",
        }}
      >
        ₹{item.price} night
      </Text>
    </TouchableOpacity>
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Response}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.flatListContent,
          { paddingBottom: tabBarHeight },
        ]}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
  },
  container: {
    top: 10,
    paddingBottom: 20,
  },

  images: {
    marginHorizontal: 20,
    backgroundColor: colors.light,
    overflow: "hidden",
    borderRadius: 15,
    marginVertical: 10,
  },

  title: {
    paddingTop: 10,
    paddingLeft: 20,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default ListingItem;
