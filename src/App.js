import { useEffect, useState } from 'react';
import Benvinguda from './components/Benvinguda';
import Escena from './components/escena/Escena';

const getData = async (setSentences, signal) => {
  try {
    const res = await fetch('../data.json', { signal });

    if (res.ok) {
      const data = await res.json();

      setSentences(data);
    }
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.log(error.name);
  }
};

function App() {
  const [sentences, setSentences] = useState();
  const [view, setView] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getData(setSentences, controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <>
      <Benvinguda view={view} setView={setView} />
      <Escena view={view} sentences={sentences} />
    </>
  );
}

export default App;
