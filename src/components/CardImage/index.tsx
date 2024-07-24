import React from "react";
import { CardContainer, Image, InfoContainer, InfoItem } from "./styles";

interface ImageProps {
  src: string | null;
  name?: string;
  function?: string;
  type?: string;
}

export const CardImage: React.FC<ImageProps> = ({
  src,
  name,
  function: func,
  type,
}) => {
  return (
    <CardContainer>
      {src && <Image src={src} alt="Imagem relacionada" />}
      <InfoContainer>
        {name && (
          <InfoItem>
            <strong>Nome:</strong> {name}
          </InfoItem>
        )}
        {func && (
          <InfoItem>
            <strong>Função:</strong> {func}
          </InfoItem>
        )}
        {type && (
          <InfoItem>
            <strong>Tipo:</strong> {type}
          </InfoItem>
        )}
      </InfoContainer>
    </CardContainer>
  );
};
