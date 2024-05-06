import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeaderApp from "./remoteApps/header/HeaderApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultsApp from "./remoteApps/results/ResultsApp";
import DetailApp from "./remoteApps/detail/DetailApp";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<div>TODO</div>} />
          <Route path="/items" element={<ResultsApp />} />
          <Route path="/items/:id" element={<DetailApp />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
