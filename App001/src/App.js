import React from 'react';
import './App.css';
import Classe from './componentes/Classe.js';
import Carro from './componentes/Carro.js';

function App() {
  
    

  return (
    <>
      <h1>Componentes de classe</h1>
      <Classe canal="Varnahal"></Classe>
      <Carro fator={1}></Carro>

    </>
  );
}

export default App;