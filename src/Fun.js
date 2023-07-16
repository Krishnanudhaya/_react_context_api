import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Fun = () => {
  const { dataArray } = useContext(AuthContext);

  const print = () => {
    console.log("print :: ", dataArray);
  };
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <p>
        <button onClick={print}>Func</button>
      </p>

      <p>
        <button onClick={goToLogin}>Back</button>
      </p>
    </>
  );
};

export default Fun;
