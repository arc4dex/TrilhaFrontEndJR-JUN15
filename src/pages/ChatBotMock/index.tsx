import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "../../components/Form";
import { Response } from "../../components/Response";
import { CardImage } from "./../../components/CardImage";

const MockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 150px 0 150px;
  background-color: black;
  min-height: 100vh;
`;

const ResponseContainer = styled.div`
  margin-top: 20px;
  text-align: justify;
  color: #00ff00 solid; /* Estilo Matrix */
  font-weight: 900;
  font-size: 23px;
  font-family: "Courier New", Courier, monospace;
  white-space: pre-wrap; /* Para manter a formatação do texto */
`;

export const ChatBotMock: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>(
    "Ah, Mufasa! Esse caramelo raiz foi resgatado da rua e rapidamente conquistou todos com seu amor por carinho e abraços quentinhos. Mufasa adora atenção e não hesita em pedir carinho o dia inteiro. Mas cuidado, ele tem um lado genioso: quando fica bravo com algo, não quer conversa com ninguém! Apesar de suas travessuras e personalidade forte, ele é uma fonte constante de amor e lealdade, sempre pronto para arranhar todo mundo e garantir que cada momento seja cheio de afeto."
  );
  const [currentImage, setCurrentImage] = useState<string>(
    "/assets/img/mufasa.jpg"
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar a pergunta e obter a resposta
  };

  return (
    <MockContainer>
      <ResponseContainer>
        <Response response={response} onTypingEnd={() => {}} />
      </ResponseContainer>
      <CardImage
        src={currentImage}
        name="Mufasa"
        function="Arranhar todo mundo e pedir carinho o dia inteiro"
        type="Caramelo Raiz"
      />
      <Form query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
    </MockContainer>
  );
};
