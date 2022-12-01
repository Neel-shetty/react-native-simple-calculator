import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Dimension } from "../../utils/Dimension";

const ResultWindow = ({ value }) => {
  console.log("state = ", value);
  // const num = state
  return (
    <View style={styles.root}>
      {/* <Text style={styles.title}>ResultWindow</Text> */}
      <Text style={styles.title}>{parseFloat(value.currentValue)}</Text>
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
    fontFamily: "Outfit-Regular",
    fontSize: 25,
  },
});
