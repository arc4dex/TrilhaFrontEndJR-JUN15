import styled from 'styled-components';

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
`;

export const PhotoSection = styled.div`
  margin-bottom: 20px;

  img {
    border-radius: 50%;
    border: 5px solid #e53939;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export const InfoSection = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #e53939;
  }

  p {
    font-size: 1.2rem;
    color: #ffffff;
  }
`;

export const AboutSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
    max-width: 600px;
  }
`;

export const InterestsSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #ffffff;
      margin-bottom: 10px;
    }
  }
`;

export const MotivationSection = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
    color: #e53939;
  }

  p {
    font-size: 1rem;
    color: #ffffff;
    max-width: 600px;
  }
`;

export const EditButton = styled.button`
  background-color: #e53939;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #ff6961;
  }
`;
