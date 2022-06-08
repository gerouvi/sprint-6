import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    margin:0
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

export const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 60px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

export const ContainerWelcome = styled.div`
  width: 600px;
  padding: 20px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(69, 69, 69, 0.3);
  text-align: center;
`;

export const ContainerScene = styled.div`
  height: 100vh;
  background-image: url(${({ bgImage }) => bgImage});

  background-size: cover;
`;
