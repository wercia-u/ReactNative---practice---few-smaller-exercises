import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [pass, setPass] = useState("");
  return (
    <View>
      <Text>Enter password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        onChangeText={(newValue) => setPass(newValue)}
      />
      {pass.length < 5 ? (
        <Text>Password must be at least 5 characters long</Text>
      ) : (
        <Text>Works fine!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
