const Escena = ({ sentences }) => (
  <>
    {sentences
      ? sentences.map((sentence, index) => <p key={index}>{sentence}</p>)
      : null}
  </>
);

export default Escena;
