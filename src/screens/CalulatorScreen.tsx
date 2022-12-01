import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/CalculatorComponents/Header";
import Title from "../components/CalculatorComponents/Title";
import ResultWindow from "../components/CalculatorComponents/ResultWindow";
import NumPad from "../components/CalculatorComponents/NumPad";
import { StatusBar } from "expo-status-bar";
import Calculator, { initialState } from "../utils/Calculator";

const CalulatorScreen = () => {
  const [state, setState] = useState(initialState);
  // const [currentValue, setCurrentValue] = useState();
  // const [operator, setOperator] = useState(null);
  // const [perviousValue, setPreviousValue] = useState();

  const handleTap = (type, value) => {
    setState(Calculator(type, value, state));
  };

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Title />
      {/* <ResultWindow  /> */}
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
