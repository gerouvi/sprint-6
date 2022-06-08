import { useState } from 'react';
import { Button, Paragraph } from '../../styled';

const Escena = ({ sentences }) => {
  const [currentActive, setCurrentActive] = useState(0);

  if (!sentences) return null;

  return (
    <>
      <Button
        disabled={currentActive === 0}
        onClick={() => setCurrentActive((prev) => prev - 1)}
      >
        Anterior
      </Button>
      <Button
        disabled={currentActive === sentences.length - 1}
        onClick={() => setCurrentActive((prev) => prev + 1)}
      >
        Següent
      </Button>
      {sentences.map((sentence, index) => (
        <Paragraph bg={index === currentActive} key={index}>
          {sentence}
        </Paragraph>
      ))}
    </>
  );
};

export default Escena;
