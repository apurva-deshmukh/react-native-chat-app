import React, { useEffect, useRef, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";
import JoinScreen from "./JoinScreen";

export default function HomeScreen() {
  const [recvMessages, setRecvMessages] = useState([]);
  const [hasJoined, setHasJoined] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://169.254.126.228:3001");
    socket.current.on("message", (message) => {
      setRecvMessages((prevState) => GiftedChat.append(prevState, message));
    });
  }, []);

  const onSend = (messages) => {
    console.log(messages);
    socket.current.emit("message", messages[0].text);
    setRecvMessages((prevState) => GiftedChat.append(prevState, messages));
  };

  const joinChat = (username) => {
    socket.current.emit("join", username);
    setHasJoined(true);
  };

  return (
    <>
      {hasJoined ? (
        <GiftedChat
          renderUsernameOnMessage
          messages={recvMessages}
          onSend={(messages) => onSend(messages)}
          user={{ _id: 1 }}
        />
      ) : (
        <JoinScreen joinChat={joinChat} />
      )}
    </>
  );
}
