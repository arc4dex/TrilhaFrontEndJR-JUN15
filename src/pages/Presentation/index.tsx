import React, { useState } from "react";
import {
  PresentationContainer,
  PhotoSection,
  InfoSection,
  AboutSection,
  InterestsSection,
  MotivationSection,
} from "./styles";

import FotoPefil from "../../assets/img/perfilImg.png";

export const PresentationPage: React.FC = () => {
  return (
    <PresentationContainer>
      <PhotoSection>
        <img src={FotoPefil} alt="Foto pessoal" />
      </PhotoSection>
      <InfoSection>
        <h1>Mrs. Pedro Bernardes</h1>
        <p>Idade: 32 anos (Ou o que a Matrix permitir)</p>
      </InfoSection>
      <AboutSection>
        <h2>Sobre</h2>
        <p>
          Sou apenas mais um programador da Matrix, tentando encontrar meu lugar
          no mundo digital. Meu objetivo de carreira é sobreviver às
          atualizações e patches de segurança enquanto exploro as profundezas do
          código.
        </p>
      </AboutSection>
      <InterestsSection>
        <h2>Gostos Pessoais</h2>
        <ul>
          <li>Fazer referência a filmes</li>
          <li>Ser mais um na fila do pão</li>
          <li>Fingir que toma a pílula vermelha</li>
        </ul>
      </InterestsSection>
      <MotivationSection>
        <h2>Motivações</h2>
        <p>
          Quero participar da comunidade Codigo Certo Coders para provar que,
          mesmo em uma simulação, posso fazer a diferença e ajudar a desmascarar
          a Matrix, um bug de cada vez.
        </p>
      </MotivationSection>
    </PresentationContainer>
  );
};
