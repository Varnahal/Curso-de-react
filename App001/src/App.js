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
        {Fpeso(peso,setPeso)}
        {Faltura(altura,setAltura)}
        {Fcalcular(peso,altura,setResultado)}
        {Resultado(resultado)}
        {TabelaImc()}
      </>
      
    
  );
}