import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import ChatMessage from "./ChatMessage";
import { TextField, Button, BottomNavigation } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function ChatRoom() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>
      <BottomNavigation className="stickToBottom">
        <form onSubmit={sendMessage}>
          <TextField
            value={formValue}
            variant="outlined"
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Type your message"
          />
          <Button type="submit" variant="contained">
            <SendIcon />
          </Button>
        </form>
      </BottomNavigation>
    </>
  );
}

export default ChatRoom;
