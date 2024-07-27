/* src/pages/Home/styles.ts */
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: green }
`;

const matrixAnimationUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

const matrixAnimationDown = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  background-color: black;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  position: relative;

  div {
    max-width: 100vw;
    text-align: center;
  }

  h1 {
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.15em solid #00ff00;
    font-size: 2rem;
    animation: ${typing} 4s steps(40, end), ${blinkCaret} 0.75s step-end infinite;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      white-space: normal; /* Allow text to wrap */
      overflow: visible; /* Allow text to wrap */
      animation: none; /* Disable animation on mobile */
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    white-space: normal;
    overflow: hidden;
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &.yes {
      background-color: blue;

      &:hover {
        background-color: darkblue;
      }
    }

    &.no {
      background-color: red;

      &:hover {
        background-color: darkred;
      }
    }

    &.start {
      background-color: darkgreen;

      &:hover {
        background-color: #00ff00;
      }
    }
  }

  .matrix-animation {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    pointer-events: none;
    z-index: 10;
  }

  .matrix-column {
    flex: 1 1 2%;
    overflow: hidden;
    color: limegreen;
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .matrix-text-up {
    display: block;
    animation: ${matrixAnimationUp} 6s linear infinite;
  }

  .matrix-text-down {
    display: block;
    animation: ${matrixAnimationDown} 6s linear infinite;
  }
`;

export const ContainerIniciar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TypingText = styled.p<{ hideCaret?: boolean }>`
  display: inline-block;
  position: relative;
  color: #00ff00;

  .caret {
    border-right: 0.1em solid #00ff00;
    animation: ${blinkCaret} 0.75s step-end infinite;
    visibility: ${({ hideCaret }) => (hideCaret ? 'hidden' : 'visible')};
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ResponseContainer = styled.div`
  max-height: 70vh; 
  overflow-y: auto;
`;

export const InfoHeader = styled.h2`
  color: #00ff00;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
