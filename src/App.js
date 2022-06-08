import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const controller = new AbortController();

    getData(setSentences, controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <>
      <Escena sentences={sentences} />
    </>
  );
}

export default App;
