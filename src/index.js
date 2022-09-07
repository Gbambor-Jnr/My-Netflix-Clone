import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NetflixProvider from "./pages/store/NetflixProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NetflixProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NetflixProvider>
  </React.StrictMode>
);
