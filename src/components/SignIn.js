import React from "react";
import firebase from "firebase/app";
import { Button } from "@material-ui/core";

function SignIn() {
  const auth = firebase.auth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className="login-btn"
      onClick={signInWithGoogle}
    >
      Sign In with Google
    </Button>
  );
}

export default SignIn;
