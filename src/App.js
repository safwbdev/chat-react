import React from "react";
import "./style.scss";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import fbConfig from "./fbConfig";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp(fbConfig);

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header />
      <section className={user ? "" : "login"}>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
export default App;
