import React, { Children, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const data = { data: "this is auth context" };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
