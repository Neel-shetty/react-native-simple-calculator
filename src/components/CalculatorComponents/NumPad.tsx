import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Dimension } from "../../utils/Dimension";
import Calculator, { initialState } from "../../utils/Calculator";
import ResultWindow from "./ResultWindow";

const NumPad = () => {
  const [state, setState] = useState(initialState);
  const handleTap = (type, value?) => {
    setState(Calculator(type, value, state));
  };
  // ResultWindow(state.currentValue);
  // console.log(state.currentValue);
  return (
    <View style={styles.root}>
      <ResultWindow value={state} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTap("clear");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>C</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("posneg");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>+/-</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("percentage");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("operator", "/");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>/</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 7);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 8);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 9);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>9</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("operator", "*");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>x</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 4);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 5);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 6);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>6</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("operator", "-");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 1);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 2);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 3);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("operator", "+");
          }}
        >
          <View style={styles.symbolContainer}>
            <Text style={styles.number}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", ".");
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("number", 0);
          }}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.number}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTap("equal");
          }}
        >
          <View style={styles.solve}>
            <Text style={styles.number}>=</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimension.width,
    // flexDirection: "row",
  },
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 77,
    backgroundColor: "#272A2F",
    borderRadius: 4,
    margin: 1,
  },
  number: {
    color: "white",
    fontFamily: "Outfit-Regular",
    fontSize: 24,
  },
  symbolContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 77,
    backgroundColor: "#212327",
    borderRadius: 4,
    margin: 1,
  },
  solve: {
    width: 156,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1972F7",
    borderRadius: 4,
    padding: 1,
  },
});
