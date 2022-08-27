import React, { useContext } from "react";
import { Context } from "../contexts/ThemeContext";

export const UseContectHook = () => {
  const bgcolor = useContext(Context);
  return (
    <div>
      <h3 style={{ backgroundColor: bgcolor }}>Hello world of context API</h3>
    </div>
  );
};
