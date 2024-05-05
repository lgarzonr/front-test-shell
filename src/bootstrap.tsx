import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeaderApp from "./remoteApps/header/HeaderApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<div>TODO</div>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
