import styled from "styled-components";

export const ResponseContainer = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-height: 60vh;
  }

  @media (max-width: 480px) {
    max-height: 50vh;
  }
`;

export const StyledResponse = styled.div`
  color: #00ff00;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-wrap: break-word; 
  
  a {
    color: #00ff00;
    text-decoration: underline;
    &:hover {
      color: #00cc00;
    }
  }
`;
