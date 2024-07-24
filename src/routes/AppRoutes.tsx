// src/Router/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { ChatBot } from "../pages/ChatBot";
import { ChatBotMock } from "../pages/ChatBotMock";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skynet" element={<ChatBot />} />
        <Route path="/teste" element={<ChatBotMock />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
