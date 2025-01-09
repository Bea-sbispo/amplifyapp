import { Amplify } from "aws-amplify";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import config from "./aws-exports";
import "./index.css";
Amplify.configure(config);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
