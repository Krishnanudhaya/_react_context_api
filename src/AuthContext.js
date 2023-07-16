import { createContext } from "react";

const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
  dataArray: [],
  setDataArray: () => {}
});

export default AuthContext;
