import { Paragraph } from '../../styled';

const Escena = ({ sentences }) => (
  <>
    {sentences
      ? sentences.map((sentence, index) => (
          <Paragraph key={index}>{sentence}</Paragraph>
        ))
      : null}
  </>
);

export default Escena;
