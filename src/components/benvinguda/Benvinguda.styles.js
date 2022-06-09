import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  height: 60px;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid black;
  background: none;

  &:disabled {
    cursor: default;
  }

  &:active {
    transform: scale(0.8);
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
