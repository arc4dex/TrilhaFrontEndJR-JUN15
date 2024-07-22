// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer, ButtonsContainer, TypingText } from "./styles";

export const Home: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowButtons(true);
    }, 4000);

    return () => clearTimeout(textTimeout);
  }, []);

  const handleYesClick = () => {
    setShowInitialText(false);
    setShowButtons(false);
    setShowFullText(true);
    const fullText =
      "Me chamo Skynet 0.5, basta me perguntar que eu responderei as suas perguntas";
    let index = -1;
    setCurrentText("");
    const intervalId = setInterval(() => {
      setCurrentText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
        setShowStartButton(true);
      }
    }, 50);
    return () => clearInterval(intervalId);
  };

  const handleNoClick = () => {
    setShowGoodbye(true);
    setShowButtons(false);
    setShowInitialText(false);
    setTimeout(() => {
      window.location.href = "https://www.instagram.com";
    }, 3000);
  };

  return (
    <HomeContainer>
      <div>
        {showInitialText && <h1>Você está pronto para o futuro?</h1>}
        {showButtons && showInitialText && (
          <ButtonsContainer>
            <button className="yes" onClick={handleYesClick}>
              Sim
            </button>
            <button className="no" onClick={handleNoClick}>
              Não
            </button>
          </ButtonsContainer>
        )}
        {showFullText && (
          <>
            <div>
              <TypingText>
                {currentText}
                <span className="caret"></span>
              </TypingText>
            </div>
            {showStartButton && (
              <div>
                <button className="start" onClick={() => navigate("/chatbot")}>
                  Iniciar?
                </button>
              </div>
            )}
          </>
        )}
        {showGoodbye && <p>Então você voltará para sua realidade...</p>}
      </div>
    </HomeContainer>
  );
};
