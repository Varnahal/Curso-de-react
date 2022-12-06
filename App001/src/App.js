import React,{useState,useEffect} from 'react';
import TabelaImc from './componentes/TabelaImc.js';
import Fpeso from './componentes/Fpeso.js';
import Faltura from './componentes/Faltura.js';
import Fcalcular from './componentes/Fcalcular.js';
import Resultado from './componentes/Resultado.js'
import './App.css';



export default function App(){
  const[peso,setPeso] = useState(0);
  const[altura,setAltura] = useState(0);
  const[resultado,setResultado] = useState(0);

  return (
    
      <>
        <Fpeso p={peso} sp={setPeso}/>
        <Faltura a={altura} sa={setAltura}/> 
        <Fcalcular p={peso} a={altura} sr={setResultado}/>
        <Resultado res={resultado}/>
        <TabelaImc/>
      </>
      
    
  );
}