// src/components/Response/index.tsx
import React from "react";
import { TypingText } from "../TypingText";

interface ResponseProps {
  response: string;
}

export const Response: React.FC<ResponseProps> = ({ response }) => {
  return response ? <TypingText text={response} /> : null;
};
