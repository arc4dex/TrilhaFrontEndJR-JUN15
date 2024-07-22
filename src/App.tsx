// src/App.tsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div>
      <h1>Assistente Virtual</h1>
      <AppRoutes />
    </div>
  );
};

export default App;
