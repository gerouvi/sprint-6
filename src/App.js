import { useEffect, useState } from 'react';
import Benvinguda from './components/benvinguda/Benvinguda';
import Escena from './components/escena/Escena';
import { GlobalStyles } from './globalStyled';

const getData = async (setData, signal) => {
  try {
    const res = await fetch('../data.json', { signal });

    if (res.ok) {
      const data = await res.json();

      setData(data);
    }
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.log(error.name);
  }
};

function App() {
  const [data, setData] = useState();
  const [view, setView] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getData(setData, controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Benvinguda view={view} setView={setView} />
      <Escena view={view} data={data} />
    </div>
  );
}

export default App;
