import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalulatorScreen from "./src/screens/CalulatorScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

//commit

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("./assets/fonts/Outfit/Outfit-Black.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit/Outfit-Bold.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit/Outfit-Medium.ttf"),
    "Outfit-Regular": require("./assets/fonts/Outfit/Outfit-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>

      <StatusBar style="light" />
      <CalulatorScreen />
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
