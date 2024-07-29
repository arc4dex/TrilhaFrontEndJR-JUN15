import React, { useEffect, useState } from "react";
import { StyledResponse } from "./styles";

interface ResponseProps {
  response: string;
  onTypingEnd: () => void;
  imageInfo?: {
    name: string;
    function: string;
    atribuit: string;
    highlight?: string;
    description?: string;
  } | null;
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
  imageInfo,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Response from API:", response);

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
    <StyledResponse>
      {createLinkMarkup(displayedText)}
      {imageInfo && imageInfo.highlight && (
        <div>
          <p>{imageInfo.description}</p>
          <a
            href={imageInfo.highlight}
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja meus pratos no Instagram
          </a>
        </div>
      )}
    </StyledResponse>
  );
};
