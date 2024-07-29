import React, { useEffect, useState } from "react";
import { StyledResponse, ResponseContainer } from "./styles";

interface ResponseProps {
  response: string;
  onTypingEnd: () => void;
}

const createLinkMarkup = (text: string) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  return text.split(urlPattern).map((part, index) =>
    urlPattern.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      part
    )
  );
};

export const Response: React.FC<ResponseProps> = ({
  response,
  onTypingEnd,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < response.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + response.charAt(index));
        setIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeoutId);
    } else {
      onTypingEnd();
    }
  }, [index, response, onTypingEnd]);

  return (
    <ResponseContainer>
      <StyledResponse>{createLinkMarkup(displayedText)}</StyledResponse>
    </ResponseContainer>
  );
};
