import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // create new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in existing user with email and password
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer for current user condition
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unSubscribe();
  }, []);

  // google sigin in
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in
  const signInGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  // log out user
  const logOut = () => {
    return signOut(auth);
  };
  // auth context value
  const authInfo = {
    createUser,
    logInUser,
    user,
    signInGoogle,
    signInGitHub,
    logOut,
  };
  
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
