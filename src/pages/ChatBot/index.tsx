// src/components/ChatBot.tsx
import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { Form } from "../../components/Form";
import { Response } from "../../components/Response";
import { CardImage } from "./../../components/CardImage";
import { getFormattedInfo } from "../../hook/loadInfo";

const data = {
  images: {
    pedro: "/assets/pedro.jpg",
    hellen: "/assets/hellen.jpg",
    dark: "/assets/dark.jpg",
    safira: "/assets/safira.jpg",
    mufasa: "/assets/mufasa.jpg",
    family: "/assets/family.jpg",
    dune: "/assets/dune.jpg",
    boardgame: "/assets/boardgame.jpg",
    wedding: "/assets/wedding.jpg",
  },
};

export const ChatBot: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY);
  }, []);

  const fetchResponse = async (query: string) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) {
      console.error("API Key is missing");
      setResponse("Erro: API Key está faltando");
      return;
    }

    const formattedInfo = getFormattedInfo();

    try {
      const result = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: `Você é Robo3000, o mordomo sarcástico que serve ao seu mestre Pedro Bernardes. Aqui estão algumas informações sobre Pedro: ${formattedInfo}. Você deve sempre responder de maneira sarcástica e divertida às perguntas sobre Pedro (mestre). Responda a perguntas sobre suas experiências profissionais, habilidades, educação, hobbies e informações pessoais com um tom sarcástico e humorístico e tambem sobre você e suas funções como mordomo. Se a pergunta não estiver relacionada a Pedro, responda com 'Desculpe, meu mestre me autorizou apenas a responder perguntas relacionadas a Ele.'`,
            },
            { role: "user", content: query },
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const message = result.data.choices[0].message.content.trim();
      setResponse(message);

      // Definir imagem com base na resposta
      if (message.includes("Pedro")) {
        setCurrentImage(data.images.pedro);
      } else if (message.includes("Hellen")) {
        setCurrentImage(data.images.hellen);
      } else if (message.includes("Dark")) {
        setCurrentImage(data.images.dark);
      } else if (message.includes("Safira")) {
        setCurrentImage(data.images.safira);
      } else if (message.includes("Mufasa")) {
        setCurrentImage(data.images.mufasa);
      } else if (message.includes("família")) {
        setCurrentImage(data.images.family);
      } else if (message.includes("Duna")) {
        setCurrentImage(data.images.dune);
      } else if (message.includes("boardgame")) {
        setCurrentImage(data.images.boardgame);
      } else if (message.includes("casamento")) {
        setCurrentImage(data.images.wedding);
      } else {
        setCurrentImage(null);
      }
    } catch (error) {
      console.error("Erro ao buscar resposta:", error);
      setResponse(
        "Desculpe, houve um erro ao buscar a resposta. Tente novamente."
      );
      setCurrentImage(null);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchResponse(query);
  };

  return (
    <div>
      <Form query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <Response response={response} />
      <CardImage src={currentImage} />
    </div>
  );
};


