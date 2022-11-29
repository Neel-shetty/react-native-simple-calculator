import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/CalculatorComponents/Header";
import NumPad from "./src/components/CalculatorComponents/NumPad";
import ResultWindow from "./src/components/CalculatorComponents/ResultWindow";
import Title from "./src/components/CalculatorComponents/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Title />
      <ResultWindow />
      <NumPad />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
