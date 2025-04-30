// src/Logout.js
import React from "react";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

function Logout() {
  const logout = () => {
    signOut(auth);
    alert("Logged out");
  };

  return <button onClick={logout}>Logout</button>;
}

export default Logout;
