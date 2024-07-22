import React from "react";

interface ResponseProps {
  response: string;
}

export const Response: React.FC<ResponseProps> = ({ response }) => {
  return response ? <p>{response}</p> : null;
};
