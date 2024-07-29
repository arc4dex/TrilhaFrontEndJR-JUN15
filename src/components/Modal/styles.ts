import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 80%;
  max-width: 500px;
  background: #000;
  border: 1px solid #00ff00;
  padding: 20px;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  position: relative; /* Adiciona esta linha */
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #00ff00;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const QuestionButton = styled.button`
  background: #000;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background: #00ff00;
    color: #000;
  }
`;
