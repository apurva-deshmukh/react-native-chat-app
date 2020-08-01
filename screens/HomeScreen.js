import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import io from "socket.io-client";

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://169.254.126.228:3001");
  }, []);

  const sendMessage = () => {
    socket.current.emit("message", messageToSend);
    setMessageToSend("");
  };

  return (
    <View style={styles.container}>
      <Text>Hello from React Native!</Text>
      <TextInput
        value={messageToSend}
        onChangeText={(text) => setMessageToSend(text)}
        placeholder="Enter chat message..."
        onSubmitEditing={sendMessage}
      />
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
