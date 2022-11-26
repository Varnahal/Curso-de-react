import React,{useState} from 'react';
import './App.css';
import Classe from './componentes/Classe.js';
import Carro from './componentes/Carro.js';

function App() {
    const [carro,setcarro] = useState();
    const mostrarcarro = ()=>{
      setcarro(!carro)
    }

  return (
    <>
      <h1>Componentes de classe</h1>
      {carro? <Carro fator={1}></Carro>: ''}
      <Classe canal="Varnahal"></Classe>
      <button onClick={()=>{mostrarcarro()}}>
        Remover
      </button>
      

    </>
  );
}

export default App;