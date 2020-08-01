import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";

export default function App() {
  useEffect(function () {
    io("http://169.254.126.228:3001");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
