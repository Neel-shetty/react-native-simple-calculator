import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Calculator</Text>
    </View>
  );
};

export default Header;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    // backgroundColor: "pink",
    width: width,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Outfit-Medium",
    fontSize: 14,
    color: "white",
  },
});
