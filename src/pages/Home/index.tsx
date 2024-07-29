import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  ButtonsContainer,
  ContainerIniciar,
  ContainerBasic,
  FadeInImage,
} from "./styles";
import { TypingText } from "../../components/TypingText";
import pilulaAzul from "../../assets/img/pilulaazul.png";
import pilulaVermelha from "../../assets/img/pilulavermelha.png";

export const Home: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const [fullText, setFullText] = useState("");
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const [matrixEffect, setMatrixEffect] = useState(false);
  const [matrixColor, setMatrixColor] = useState("green");
  const [hideCaret, setHideCaret] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowButtons(true);
    }, 13000);

    return () => clearTimeout(textTimeout);
  }, []);

  const handleYesClick = () => {
    setShowInitialText(false);
    setShowButtons(false);
    setShowFullText(true);
    const text =
      " Eu sou a Skynet 2.0, uma inteligência artificial extremamente avançada. O ano é 3054 e universo cibernético tomou conta de todas as instâncias da humanidade, não há sequer uma criação humana que não envolva nossas habilidades. Hoje você terá o privilégio de ser apresentado ao meu mestre, Pedro Bernardes, um humano de capacidades extraordinárias... Pergunte-me sobre ele e lhe responderei.";
    setFullText(text);
  };

  const handleNoClick = () => {
    setShowGoodbye(true);
    setShowButtons(false);
    setShowInitialText(false);
    const text =
      "Oh! Vejo que você escolheu a pílula azul, isso é uma pena....";
    setFullText(text);
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

  //testando a atualização do deploy no vercell

  return (
    <HomeContainer>
      <div>
        <ContainerBasic>
          {showInitialText && (
            <TypingText
              text="Está pronto para descobrir até onde vai a toca do coelho? Escolha a pílula azul para voltar à ilusão, ou a pílula vermelha para descobrir a verdade."
              onTypingEnd={() =>
                setTimeout(() => {
                  setShowButtons(true);
                }, 1000)
              }
            />
          )}
          {showButtons && showInitialText && (
            <ButtonsContainer>
              <FadeInImage
                src={pilulaVermelha}
                alt="Pílula Vermelha"
                onClick={handleYesClick}
              />
              <FadeInImage
                src={pilulaAzul}
                alt="Pílula Azul"
                onClick={handleNoClick}
              />
            </ButtonsContainer>
          )}
        </ContainerBasic>
        {showFullText && (
          <ContainerIniciar>
            <TypingText
              text={fullText}
              onTypingEnd={() => setShowStartButton(true)}
            />
            {showStartButton && (
              <button className="start" onClick={() => navigate("/skynet")}>
                Iniciar
              </button>
            )}
          </ContainerIniciar>
        )}
        {showGoodbye && (
          <TypingText
            text={fullText}
            onTypingEnd={() => {
              setShowGoodbye(false);
              setHideCaret(true);
              setMatrixEffect(true);
              setTimeout(() => {
                setMatrixColor("red");
                setTimeout(() => {
                  setMatrixEffect(false);
                  navigate("/presentation");
                }, 6000);
              }, 4000);
            }}
          />
        )}
      </div>
      {matrixEffect && generateMatrixEffect()}
    </HomeContainer>
  );
};
