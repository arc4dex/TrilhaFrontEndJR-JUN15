import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #000;
  border: 2px solid #00ff00;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  position: relative; /* Adicionado para posicionamento absoluto do botão de fechar */
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #00ff00;
  font-size: 1.5rem;
  position: absolute; /* Alterado para posicionamento absoluto */
  top: 10px; /* Ajustado para posicionar no canto superior direito */
  right: 10px; /* Ajustado para posicionar no canto superior direito */
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

export const Message = styled.p`
  margin: 20px 0;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: #00ff00;
  background-color: black;
  border: 1px solid #00ff00;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #00ff00;
    color: black;
  }
`;

// Estilos da página Presentation
export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
`;

export const PhotoSection = styled.div`
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    border: 5px solid #e53939;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #e53939;
  }

  p {
    font-size: 1.2rem;
    color: #ffffff;
  }
`;

export const AboutSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
    max-width: 600px;
  }
`;

export const InterestsSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #ffffff;
      margin-bottom: 10px;
    }
  }
`;

export const MotivationSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
    max-width: 600px;
  }
`;

export const EditButton = styled.button`
  background-color: #e53939;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #ff6961;
  }
`;
