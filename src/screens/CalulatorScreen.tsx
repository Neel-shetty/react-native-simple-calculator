import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/CalculatorComponents/Header";
import Title from "../components/CalculatorComponents/Title";
import ResultWindow from "../components/CalculatorComponents/ResultWindow";
import NumPad from "../components/CalculatorComponents/NumPad";
import { StatusBar } from "expo-status-bar";

const CalulatorScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Title />
      <ResultWindow />
      <NumPad />
    </SafeAreaView>
  );
};

export default CalulatorScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#1C1D21",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
