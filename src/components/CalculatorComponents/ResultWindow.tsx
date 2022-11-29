import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimension } from "../../utils/Dimension";

const ResultWindow = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>ResultWindow</Text>
    </View>
  );
};

export default ResultWindow;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#212327",
    height: 126,
    alignItems: "center",
    justifyContent: "center",
    // width: Dimension.width * 0.9,
    width: 315,
    borderRadius: 4,
  },
  title: {
    color: "white",
  },
});
