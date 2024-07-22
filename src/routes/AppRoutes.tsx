// src/Router/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { ChatBot } from "../pages/ChatBot";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
