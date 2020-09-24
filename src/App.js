import React from "react";
import "./App.css";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import fbConfig from "./fbConfig";
import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp(fbConfig);

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Chat-React</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}
export default App;
