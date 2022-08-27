import React, { useContext } from "react";
import { Context } from "../contexts/ThemeContext";

const HelloWorld = () => {
  const color = useContext(Context);
  return (
    <div>
      <h1 style={{ color: color }}> Hello World</h1>
    </div>
  );
};

export default HelloWorld;
