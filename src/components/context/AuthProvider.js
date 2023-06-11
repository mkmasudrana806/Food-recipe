import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
      if(currentUser){
        setUser(currentUser);
      }
    });
    return () => unSubscribe();
  }, []);
  // auth context value
  const authInfo = { createUser, logInUser, user };
console.log(user);
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
