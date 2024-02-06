import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";

function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("home");
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../assets/static/ic_logo.png")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
