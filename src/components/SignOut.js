import React from "react";
import firebase from "firebase/app";
import { Button } from "@material-ui/core";
function SignOut() {
  const auth = firebase.auth();
  return (
    auth.currentUser && (
      <Button
        onClick={() => auth.signOut()}
        variant="outlined"
        className="logout-btn"
      >
        Sign Out
      </Button>
    )
  );
}

export default SignOut;
