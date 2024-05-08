import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import HeaderApp from "./remoteApps/header/HeaderApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/home/homeView";

const rootElement = document.getElementById("root");

const ResultsApp = lazy(() => import("./remoteApps/results/ResultsApp"));
const DetailApp = lazy(() => import("./remoteApps/detail/DetailApp"));

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <BrowserRouter>
        <HeaderApp />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/items" element={<ResultsApp />} />
            <Route path="/items/:id" element={<DetailApp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}
