import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  align-items: center;
  margin-top: 20px;
  border: 2px solid #00ff00;
  border-radius: 10px;
  padding: 20px;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  animation: ${fadeIn} 0.5s ease-in-out; /* Aplicar animação de fade-in */

  @media (min-width: 450px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  border: 2px solid #00ff00;
  border-radius: 10px;
  max-width: 170px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    align-items: flex-start;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  width: 100%;
  font-size: 18px;
  text-align: left;
  max-width: 300px;
  border: 1px solid #00ff00;
  padding: 7px;
  border-radius: 5px;
`;
