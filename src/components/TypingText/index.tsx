// src/components/TypingText/index.tsx
import React, { useEffect, useState } from "react";
import { TypingText as StyledTypingText } from "./styles";

interface TypingTextProps {
  text: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <StyledTypingText hideCaret={index >= text.length}>
      {currentText}
      <span className="caret"></span>
    </StyledTypingText>
  );
};
