import React, { ChangeEvent, FormEvent } from "react";
import { FormContainer } from "./styles";

interface FormProps {
  query: string;
  setQuery: (query: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  query,
  setQuery,
  handleSubmit,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Digite sua pergunta"
      />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
};
