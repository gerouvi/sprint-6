import styled from 'styled-components';

export const Paragraph = styled.p`
  border: 3px solid black;
  border-radius: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  background-color: ${({ bg }) => (bg ? 'pink' : '')};
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
