import styled, { keyframes } from "styled-components";

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #00ff00 }
`;

export const TypingText = styled.p<{ hideCaret?: boolean }>`
  display: inline-block;
  position: relative;
  color: #00ff00;

  .caret {
    border-right: 0.1em solid #00ff00;
    animation: ${blinkCaret} 1s step-end infinite;
    visibility: ${({ hideCaret }) => (hideCaret ? 'hidden' : 'visible')};
  }
`;