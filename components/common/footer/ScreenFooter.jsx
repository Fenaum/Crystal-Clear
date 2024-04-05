// components/Footer.js
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Image,  } from "react-native";
import styles from "./screenFooter.style"


const ScreenFooter = ({
  leftIconURL,
  middleIconURL,
  rightIconURL,
  sideBtnDimension,
  middleBtnDimension,
  handlePress,
}) => {
  return (
    <SafeAreaView style={styles.footerContainer} >
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image
          source={leftIconURL}
          style={styles.btnImg(sideBtnDimension)}
          resizeMode="cover"
        />
        <Text>Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image
          source={middleIconURL}
          style={styles.btnImg(middleBtnDimension)}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Image
          source={rightIconURL}
          style={styles.btnImg(sideBtnDimension)}
          resizeMode="cover"
        />
        <Text>Log Streaks</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScreenFooter;
