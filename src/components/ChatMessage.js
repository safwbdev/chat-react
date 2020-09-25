import React from "react";
import firebase from "firebase/app";
import { Avatar, Chip } from "@material-ui/core";

function ChatMessage(props) {
  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <div className={`message ${messageClass}`}>
      <Chip avatar={<Avatar alt="Natacha" src={photoURL} />} label={text} />
    </div>
  );
}

export default ChatMessage;
