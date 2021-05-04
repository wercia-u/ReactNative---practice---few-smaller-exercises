import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.text1Style} />
      <View style={styles.text2Style} />
      <View style={styles.text3Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: "black",
    height: 210,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1Style: {
    backgroundColor: "red",
    alignSelf: "flex-start",
    height: 100,
    width: 100,
  },
  text2Style: {
    backgroundColor: "green",
    alignSelf: "flex-end",
    height: 100,
    width: 100,
  },
  text3Style: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
