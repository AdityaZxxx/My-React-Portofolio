// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
let root;
if (rootElement) {
  root = ReactDOM.createRoot(rootElement);
} else {
  console.error("Failed to find the root element");
}
if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
