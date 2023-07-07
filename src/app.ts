// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";

import "./css/tailwind.css";
// Import tailwind styles
import "zmp-ui/zaui.css";

import "./css/app.scss";

// Import App Component
import App from "./components/app";
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) {
    window.APP_CONFIG = appConfig;
}

window.isBack = false;

// Mount React App
const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(React.createElement(App));
