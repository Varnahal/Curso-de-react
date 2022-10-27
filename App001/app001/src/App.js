import React,{useState} from "react";
import Numero from "./componentes/Numero";
import Nome from "./componentes/Nome";
import './App.css'

export default function App() {
  const[num,setnum] = useState(10)
  const[nome,setNome] = useState('Sem Nome registrado')
  return(
    <>
      <p>o valor de state é: {num}</p>
      <Numero num={num} setNum = {setnum}/>
      <Nome nome={nome} setNome={setNome}/>
    </>
  );
}