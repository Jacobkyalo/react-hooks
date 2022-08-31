import React, { createContext } from "react";
export const Login = createContext();

const LoginContext = ({ children }) => {
  return <Login.Provider value={"hello"}>{children}</Login.Provider>;
};

export default LoginContext;
