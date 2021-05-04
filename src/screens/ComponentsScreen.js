import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Werka";
  return (
    <View>
      <Text style={styles.textHeaderStyle}>
        Getting started with React Native!
      </Text>
      <Text style={styles.textSubheaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeaderStyle: {
    fontSize: 45,
  },
  textSubheaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
