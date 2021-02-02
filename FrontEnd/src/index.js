import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ navbarHeight: "60px" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
