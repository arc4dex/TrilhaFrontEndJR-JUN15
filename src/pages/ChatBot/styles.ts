import styled from "styled-components";

export const ContainerMain = styled.main`
  padding: 0 150px 0 150px;

  @media (max-width: 768px) {
    padding: 0 10px 0 10px;
  }
`

export const ContainerBasic = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: black;
  min-height: 100vh; /* Garantir altura mínima de 100vh */
  width: 100%;
  overflow: auto; /* Permitir rolagem interna */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ResponseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  color: #00ff00; /* Estilo Matrix */
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap; /* Para manter a formatação do texto */
`;

export const InfoHeader = styled.h3`
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 20px;
  text-align: left;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  form {
    width: 100%;
    max-width: 600px; /* Limitar a largura máxima do formulário */
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 16px;
      color: #00ff00;
      background-color: black;
      border: 1px solid #00ff00;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
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
    }
  }
`;
