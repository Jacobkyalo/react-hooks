import React, { useContext, useRef } from "react";
import { Login } from "../contexts/LoginContext";

const ConsumeLoginContext = () => {
  const inputRef = useRef();
  console.log(inputRef);
  const value = useContext(Login);
  return (
    <div>
      <input ref={inputRef} />
      <h1>{value}</h1>
    </div>
  );
};

export default ConsumeLoginContext;
