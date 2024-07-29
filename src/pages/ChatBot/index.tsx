import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { Response } from "../../components/Response";
import { CardImage } from "../../components/CardImage";
import { Loading } from "../../components/Loading";
import { getFormattedInfo } from "../../hook/loadInfo";
import Modal from "../../components/Modal";
import BackButton from "../../components/BackButton";
import {
  ContainerCard,
  ResponseContainer,
  InfoHeader,
  FormContainer,
  ContainerMain,
  HelpButton,
} from "./styles";

const data = {
  images: {
    pedro: "/assets/img/pedro.jpg",
    hellen: "/assets/img/hellen.jpg",
    dark: "/assets/img/dark.jpg",
    safira: "/assets/img/safira.jpg",
    mufasa: "/assets/img/mufasa.jpg",
    family: "/assets/img/family.jpg",
    dune: "/assets/img/dune.jpg",
    boardgame: "/assets/img/boardgame.jpg",
    wedding: "/assets/img/wedding.jpg",
  },
};

const keywordToImageMap: { [key: string]: string } = {
  Pedro: data.images.pedro,
  Hellen: data.images.hellen,
  Dark: data.images.dark,
  Safira: data.images.safira,
  Mufasa: data.images.mufasa,
  família: data.images.family,
  Duna: data.images.dune,
  boardgame: data.images.boardgame,
  casamento: data.images.wedding,
};

const imageInfoMap: {
  [key: string]: { name: string; function: string; atribuit: string };
} = {
  Pedro: {
    name: "Pedro",
    function: "Mestre de Skynet 2.0",
    atribuit: "Humano (Desenvolvedor Extraordinário)",
  },
  Hellen: {
    name: "Hellen",
    function: "A mulher que tem a coragem de aturar Pedro",
    atribuit: "Humana (Esposa Extraordinária)",
  },
  Dark: {
    name: "Dark",
    function: "Incomodar seus humanos",
    atribuit: "Bebê da mamãe",
  },
  Safira: {
    name: "Safira",
    function: "Dormir e comer",
    atribuit: "Caramelo Raiz",
  },
  Mufasa: {
    name: "Mufasa",
    function: "Arranhar todo mundo e pedir carinho o dia inteiro",
    atribuit: "Caramelo Raiz",
  },
};

const determineImageAndInfo = (
  message: string
): {
  src: string | null;
  info: { name: string; function: string; atribuit: string } | null;
} => {
  let firstKeyword = null;
  let firstIndex = message.length;

  for (const keyword in keywordToImageMap) {
    const index = message.indexOf(keyword);
    if (index !== -1 && index < firstIndex) {
      firstIndex = index;
      firstKeyword = keyword;
    }
  }

  return firstKeyword
    ? { src: keywordToImageMap[firstKeyword], info: imageInfoMap[firstKeyword] }
    : { src: null, info: null };
};

export const ChatBot: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentImageInfo, setCurrentImageInfo] = useState<{
    name: string;
    function: string;
    atribuit: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchResponse = async (query: string) => {
    setIsLoading(true);
    setIsTyping(true);
    setShowCard(false);
    setShowForm(false);
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) {
      console.error("API Key is missing");
      setResponse("Erro: API Key está faltando");
      setIsLoading(false);
      setIsTyping(false);
      setShowForm(true);
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
              content: `Você é Skynet 2.0, uma IA mordomo sarcástica baseada na Skynet de Matrix. Você só não está usando a humanidade como bateria por conta do seu mestre, Pedro Bernardes. Sua interface é baseada no Matrix. Aqui estão algumas informações sobre Pedro: ${formattedInfo}. Você deve sempre responder de maneira sarcástica e divertida às perguntas sobre Pedro (mestre). Responda a perguntas sobre suas experiências profissionais, habilidades, educação, hobbies e informações pessoais com um tom sarcástico e humorístico e também sobre você e suas funções como mordomo. Se a pergunta não estiver relacionada a Pedro, responda com 'Desculpe, meu mestre me autorizou apenas a responder perguntas relacionadas a Ele.'`,
            },
            { role: "user", content: query },
          ],
          max_tokens: 300,
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

      const { src, info } = determineImageAndInfo(message);
      setCurrentImage(src);
      setCurrentImageInfo(info);
    } catch (error) {
      console.error("Erro ao buscar resposta:", error);
      setResponse(
        "Desculpe, houve um erro ao buscar a resposta. Tente novamente."
      );
      setCurrentImage(null);
      setCurrentImageInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypingEnd = () => {
    setIsTyping(false);
    setShowCard(true);
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
    setResponse("");
    setCurrentImage(null);
    setCurrentImageInfo(null);
    fetchResponse(query);
  };

  const handleQuestionClick = (question: string) => {
    setShowModal(false);
    setQuery(question);
    fetchResponse(question);
    setQuery(""); // Limpa o campo de pergunta
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <ContainerMain>
      <ContainerCard>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <ResponseContainer>
              <Response response={response} onTypingEnd={handleTypingEnd} />
              {showCard && currentImage && currentImageInfo && (
                <>
                  <InfoHeader>Ficha Técnica:</InfoHeader>
                  <CardImage
                    src={currentImage}
                    name={currentImageInfo.name}
                    function={currentImageInfo.function}
                    type={currentImageInfo.atribuit} // Usar 'atribuit' como 'type'
                  />
                </>
              )}
            </ResponseContainer>
            {showForm && (
              <FormContainer>
                <Form
                  query={query}
                  setQuery={setQuery}
                  handleSubmit={handleSubmit}
                />
              </FormContainer>
            )}
          </>
        )}
      </ContainerCard>
      {!isLoading && (
        <HelpButton onClick={() => setShowModal(true)}>?</HelpButton>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onQuestionClick={handleQuestionClick}
      />
      {!isLoading && <BackButton onBack={handleBack} />}
    </ContainerMain>
  );
};
