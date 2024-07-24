import React from "react";
import { LoadingText } from "./styles";

export const Loading: React.FC = () => {
  return (
    <LoadingText>
      Processando
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>
    </LoadingText>
  );
};
