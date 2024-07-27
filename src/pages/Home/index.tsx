import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  ButtonsContainer,
  TypingText,
  ContainerIniciar,
  ContainerBasic,
} from "./styles";

export const Home: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const [matrixEffect, setMatrixEffect] = useState(false);
  const [matrixColor, setMatrixColor] = useState("green");
  const [hideCaret, setHideCaret] = useState(false);
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
      "Eu sou a Skynet 2.0, uma inteligência artificial extremamente avançada. O ano é 3054 e universo cibernético tomou conta de todas as instâncias da humanidade, não há sequer uma criação humana que não envolva nossas habilidades. Hoje você terá o privilégio de ser apresentado ao meu mestre, Pedro Bernardes, um humano de capacidades extraordinárias... Pergunte-me sobre ele e lhe responderei.";
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
  };

  const handleNoClick = () => {
    setShowGoodbye(true);
    setShowButtons(false);
    setShowInitialText(false);
    const fullText =
      "Oh! Vejo que você escolheu a pílula vermelha, isso é uma pena...";
    let index = -1;
    setCurrentText("");
    const intervalId = setInterval(() => {
      setCurrentText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setHideCaret(true); // Hide caret before animation starts
          setMatrixEffect(true);
          setCurrentText("");
          setTimeout(() => {
            setMatrixColor("red");
            setTimeout(() => {
              setMatrixEffect(false);
              navigate("/presentation");
            }, 5000);
          }, 3000);
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
    const columns = Array.from({ length: 100 }, (_, i) => i);
    return (
      <div className="matrix-animation" style={{ color: matrixColor }}>
        {columns.map((col, index) => (
          <div key={col} className="matrix-column">
            {Array.from({ length: 50 }, () => (
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
        <ContainerBasic>
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
        </ContainerBasic>
        {showFullText && (
          <ContainerIniciar>
            <TypingText hideCaret={hideCaret}>
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
          <TypingText hideCaret={hideCaret}>
            {currentText}
            <span className="caret"></span>
          </TypingText>
        )}
      </div>
      {matrixEffect && generateMatrixEffect()}
    </HomeContainer>
  );
};
