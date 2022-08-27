import React, { createContext } from "react";

export const themes = {
  light: {
    background: "#f1f1f1",
    textcolor: "#000",
  },
  dark: {
    background: "#000",
    textcolor: "#fff",
  },
};
export const Context = createContext("red");
export const ThemeContext = createContext(themes.light);
