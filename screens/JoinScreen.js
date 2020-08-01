import React, { useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function JoinScreen({ joinChat }) {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chat-icon.png")}
      />
      <View style={styles.innerView}>
        <TextInput
          style={styles.text}
          placeholder="Enter username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Button title="Join Chat" onPress={() => joinChat(username)} />
      </View>
      {Platform.OS == "ios" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default JoinScreen;
