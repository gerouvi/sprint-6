import { useState } from 'react';
import { VIEWS } from '../../constants/views';
import { Button, ContainerScene, Paragraph } from './Escena.styles.js';

const Escena = ({ data, view }) => {
  const [currentActive, setCurrentActive] = useState(0);

  const handleNextCurrentActive = (next) => {
    let newCurrent;
    if (next < 0) newCurrent = data.length - 1;
    else if (next > data.length - 1) newCurrent = 0;
    else newCurrent = next;

    setCurrentActive(newCurrent);
  };

  if (!data) return null;
  if (view !== VIEWS.ESCENA) return null;

  return (
    <>
      <ContainerScene bgImage={data[currentActive].image}>
        <Button onClick={() => handleNextCurrentActive(currentActive - 1)}>
          Anterior
        </Button>
        <Button onClick={() => handleNextCurrentActive(currentActive + 1)}>
          Següent
        </Button>
        {data.map((el, index) => (
          <Paragraph bgUrl={el.image} bg={index === currentActive} key={index}>
            {el.text}
          </Paragraph>
        ))}
      </ContainerScene>
    </>
  );
};

export default Escena;
