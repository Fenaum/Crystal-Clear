// components/Footer.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScreenFooter = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen1")}
      >
        <Text style={styles.buttonText}>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.buttonText}>Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen3")}
      >
        <Text style={styles.buttonText}>Screen 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    padding: 10,
    position: "absolute",
    bottom: 7,
    left: 0,
    right: 0,
  },
  button: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default ScreenFooter;
