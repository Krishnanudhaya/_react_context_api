import React, { useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setAuthenticated, dataArray, setDataArray } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("dataArray changed:", dataArray);
  }, [dataArray]);

  const handleLogin = () => {
    console.log("dataArray ::", dataArray);
    setAuthenticated(true);
    setDataArray((prevDataArray) => [
      ...prevDataArray,
      JSON.stringify(Math.floor(Math.random() * 100))
    ]);
    console.log("dataArray ::", dataArray);
  };

  const handleLogout = () => setAuthenticated(false);

  const gotoFun = () => {
    navigate("/Fun");
  };

  return (
    <React.Fragment>
      <ul>
        <li>
          when user clicks the login, it updates the context authenticated =
          true{" "}
        </li>
        <li>
          when user clicks the logout, it updates the context authenticated =
          false{" "}
        </li>
        <li>when user clicks the fun, it prints the value from context</li>
      </ul>

      <p>
        <button onClick={handleLogin}>login</button>
      </p>
      <p>
        <button onClick={handleLogout}>logout</button>
      </p>
      <p>
        <button onClick={gotoFun}>Fun</button>
      </p>
    </React.Fragment>
  );
};

export default Login;
