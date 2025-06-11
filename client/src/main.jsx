import { StrictMode } from "react";
import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App.jsx";
import "./index.css";
import "./css/theme.css";
import "./css/global.css";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>
);
