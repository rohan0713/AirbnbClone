import React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";

function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../assets/favicon.png")} />
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
