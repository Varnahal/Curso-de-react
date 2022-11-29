import React,{useState} from 'react';
import Globais from './componentes/Globais.js';
import Info from './componentes/info.js';
import './App.css';

function App() {
  const [resumo,setresumo] = useState(Globais.resumo);
  const gravarresumo = ()=>{
    Globais.resumo = resumo
  }
  const verresumo = ()=>{
    alert(Globais.resumo)
  }

  return (
    <>
      <p>canal: {Globais.canal}</p>
      <p>curso: {Globais.curso}</p>
      <p>ano: {Globais.ano}</p>
      <hr></hr>
      <Info></Info>
      <input type="text" value={resumo} onChange={(e)=>{setresumo(e.target.value)}}></input>
      <button onClick={()=>{gravarresumo()}}>Gravar</button>
      <button onClick={()=>{verresumo()}}>ver</button>
    </>
  );
}

export default App;