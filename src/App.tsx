// src/App.tsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
};

export default App;
