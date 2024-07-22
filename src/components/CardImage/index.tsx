import React from "react";

interface ImageProps {
  src: string | null;
}

export const CardImage: React.FC<ImageProps> = ({ src }) => {
  return src ? (
    <img
      src={src}
      alt="Imagem relacionada"
      style={{ width: "200px", height: "auto" }}
    />
  ) : null;
};
