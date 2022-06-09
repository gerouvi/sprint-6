import { VIEWS } from '../../constants/views';
import { Button, ContainerWelcome } from './Benvinguda.styles.js';

const Benvinguda = ({ view, setView }) => {
  if (view !== VIEWS.BENVINGUDA) return;

  return (
    <ContainerWelcome>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
        inventore tempore voluptatem mollitia a nam porro. Nam, deserunt
        officiis? Quos tempora aut numquam libero adipisci iusto enim
        repellendus sunt sit.
      </p>
      <Button onClick={() => setView(1)}>Començar</Button>
    </ContainerWelcome>
  );
};
export default Benvinguda;
