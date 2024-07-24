import styled from "styled-components";

export const StyledResponse = styled.div`
  color: #00ff00;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap; /* Para manter a formatação do texto */
  a {
    color: #00ff00;
    text-decoration: underline;
    &:hover {
      color: #00cc00;
    }
  }
`;