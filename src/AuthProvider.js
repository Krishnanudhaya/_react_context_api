import React, { createContext, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [dataArray, setDataArray] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        dataArray,
        setDataArray
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
