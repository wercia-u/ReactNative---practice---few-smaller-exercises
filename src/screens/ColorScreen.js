import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList, SafeAreaView } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <SafeAreaView>
      <Button
        title="Add color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        numColumns={4}
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
    </SafeAreaView>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
});

export default ColorScreen;
