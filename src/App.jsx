import React, { Suspense } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import {
  LandingPage,
  Certificates,
  Projects
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
