import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  ModalBackground,
  ModalContainer,
  CloseButton,
  Message,
  ActionButton,
} from "./styles";

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleBackClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <FaArrowLeft
        onClick={handleBackClick}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: "20px",
          left: "20px",
          color: "#00ff00",
          fontSize: "1.5rem",
        }}
      />
      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <Message>
              Ah, então você está querendo desistir da pílula? Sorte que meu
              mestre me programou para atender aos desejos do usuário. Clique no
              botão abaixo que eu faço você voltar à escolha da pílula.
            </Message>
            <ActionButton onClick={onBack}>Desistir da Pílula</ActionButton>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
};

export default BackButton;
