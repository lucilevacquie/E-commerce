import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import LoginProvider from "./loginProvider";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
