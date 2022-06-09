import styled from 'styled-components';

export const ContainerScene = styled.div`
  height: 100vh;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
`;

export const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 60px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
  &:active {
    font-size: 0.9rem;
  }
`;

export const Paragraph = styled.p`
  border: 3px solid black;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: ${({ bg }) => (bg ? 'pink' : 'rgba(255,255,255, 0.8)')};
`;
