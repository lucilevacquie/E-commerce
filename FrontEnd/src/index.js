import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import LoginProvider from "./loginProvider";

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <ThemeProvider theme={{ navbarHeight: "60px" }}>
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
