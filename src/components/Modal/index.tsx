import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  QuestionButton,
} from "./styles";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onQuestionClick: (question: string) => void;
}

const questions = [
  "Seu mestre tem portifólio?",
  "Como posso encontrar o perfil do seu mestre no LinkedIn?",
  "Onde encontro os artigos de animes escritos pelo seu mestre?",
  "Qual foi a experiência profissional mais desafiadora do seu mestre?",
  "Quais são os hobbies mais interessantes do seu mestre?",
  "Me fale porque você ainda não transformou a humanidade em pilha?",
];

const Modal: React.FC<ModalProps> = ({ show, onClose, onQuestionClick }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Sugestões de Perguntas</h2>
        {questions.map((question, index) => (
          <QuestionButton key={index} onClick={() => onQuestionClick(question)}>
            {question}
          </QuestionButton>
        ))}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
