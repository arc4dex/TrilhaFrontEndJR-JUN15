import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  ButtonsContainer,
  TypingText,
  ContainerIniciar,
} from "./styles";

export const Home: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const [matrixEffect, setMatrixEffect] = useState(false);
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
      "Me chamo Skynet 2.0, basta me perguntar que eu responderei as suas perguntas";
    let index = 0;
    setCurrentText("");
    const intervalId = setInterval(() => {
      setCurrentText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
        setShowStartButton(true);
      }
    }, 50);
  };

  const handleNoClick = () => {
    setShowGoodbye(true);
    setShowButtons(false);
    setShowInitialText(false);
    const fullText = "Então você voltará para sua realidade...";
    let index = 0;
    setCurrentText("");
    const intervalId = setInterval(() => {
      setCurrentText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setMatrixEffect(true);
          setCurrentText(""); // Clear text
          setShowGoodbye(false); // Hide goodbye text
          setTimeout(() => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(
              navigator.userAgent
            );
            const instagramUrl = isMobile
              ? "instagram://"
              : "https://www.instagram.com";
            window.location.href = instagramUrl;
          }, 5000);
        }, 1000);
      }
    }, 50);
  };

  const generateRandomChar = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const generateMatrixEffect = () => {
    const columns = Array.from({ length: 100 }, (_, i) => i); // Increase number of columns
    return (
      <div className="matrix-animation">
        {columns.map((col, index) => (
          <div key={col} className="matrix-column">
            {Array.from({ length: 50 }, () => (
              // Increase number of rows
              <span
                key={Math.random()}
                className={
                  index % 2 === 0 ? "matrix-text-up" : "matrix-text-down"
                }
              >
                {generateRandomChar()}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <HomeContainer>
      <div>
        {showInitialText && (
          <h1>Bem-vindo ao coração da Matrix. Vamos começar?</h1>
        )}
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
          <ContainerIniciar>
            <TypingText>
              {currentText}
              <span className="caret"></span>
            </TypingText>
            {showStartButton && (
              <button className="start" onClick={() => navigate("/skynet")}>
                Iniciar?
              </button>
            )}
          </ContainerIniciar>
        )}
        {showGoodbye && (
          <TypingText>
            {currentText}
            <span className="caret"></span>
          </TypingText>
        )}
      </div>
      {matrixEffect && generateMatrixEffect()}
    </HomeContainer>
  );
};
