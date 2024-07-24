import React, { useEffect, useState } from "react";
import { TypingText as StyledTypingText } from "./styles";

interface TypingTextProps {
  text: string;
  onTypingEnd: () => void;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  onTypingEnd,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeoutId);
    } else {
      onTypingEnd();
    }
  }, [index, text, onTypingEnd]);

  return (
    <StyledTypingText hideCaret={index >= text.length}>
      {currentText}
      <span className="caret"></span>
    </StyledTypingText>
  );
};
