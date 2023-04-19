import logo from './logo.svg';
import './App.scss';
import Home from './home/Home';
import Form from './form/Form';
import { HomeContext } from './shared/HomeContext';
import { useState } from 'react';

function App() {

  const [estilos, setEstilos] = useState({
    topText: "Angular",
    topX: 65,
    topY: 17,
    bottomText: "React",
    bottomX: 5,
    bottomY: 20,
  })

  return (
    <HomeContext.Provider value={{ estilos, setEstilos }}>
      <Home />
      <Form />
    </HomeContext.Provider>
  );
}

export default App;

/*
<ProductsContext.Provider value={{ usuarios, setUsuarios }}>
  <Home />
</ProductsContext.Provider>
*/