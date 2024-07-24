import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  input {
    background-color: black;
    border: 2px solid #00ff00;
    border-radius: 5px;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 10px;
    width: 550px;
    outline: none;

    &::placeholder {
      color: #00ff00;
    }
  }

  button {
    background-color: black;
    border: 2px solid #00ff00;
    border-radius: 5px;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #00ff00;
      color: black;
    }
  }
`;
