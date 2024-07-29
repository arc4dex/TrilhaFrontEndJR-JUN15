import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ChatBot } from "../pages/ChatBot";
import { PresentationPage } from "../pages/Presentation";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skynet" element={<ChatBot />} />
        <Route path="/presentation" element={<PresentationPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
