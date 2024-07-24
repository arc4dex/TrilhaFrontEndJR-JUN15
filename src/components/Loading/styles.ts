import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingText = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #00ff00; /* Cor do texto Matrix */

  .dot {
    animation: ${blink} 1s infinite;
  }

  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
`;