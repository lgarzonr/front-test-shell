import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeaderApp from "./remoteApps/header/HeaderApp";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <h1>Hola Shell</h1>
      <HeaderApp />
    </StrictMode>
  );
}
