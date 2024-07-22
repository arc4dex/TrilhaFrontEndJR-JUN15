import styled, { keyframes } from "styled-components";

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: green }
`;

export const TypingText = styled.p<{ hideCaret?: boolean }>`
  display: inline-block;
  position: relative;
  color: green;

  .caret {
    border-right: 0.1em solid green;
    animation: ${blinkCaret} 0.75s step-end infinite;
    visibility: ${({ hideCaret }) => (hideCaret ? 'hidden' : 'visible')};
  }
`;