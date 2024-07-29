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
  "Seu mestre gosta de escrever sobre anime?",
  "Qual foi a experiência profissional mais desafiadora do seu mestre?",
  "Quais são os hobbies mais interessantes do seu mestre?",
];

const Modal: React.FC<ModalProps> = ({ show, onClose, onQuestionClick }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
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
