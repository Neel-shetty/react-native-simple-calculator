import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimension } from "../../utils/Dimension";

const Title = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Calculator</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  root: {
    width: Dimension.width,
    paddingLeft: 20,
  },
  title: {
    fontFamily: "Outfit-Regular",
    fontSize: 32,
    color:'white'
  },
});
