import React,{useState} from 'react';
import Nota from './componentes/Nota.js';
import Resultado from './componentes/Resultado.js';
import './App.css';

function App() {

    const [notas,setnotas] = useState({"nota1":0,"nota2":0,"nota3":0,"nota4":0,})

  
  return (
    <>
      <Nota num={1} nota={notas.nota1} setnotas={setnotas} notas={notas}/>
      <Nota num={2} nota={notas.nota2} setnotas={setnotas} notas={notas}/>
      <Nota num={3} nota={notas.nota3} setnotas={setnotas} notas={notas}/>
      <Nota num={4} nota={notas.nota4} setnotas={setnotas} notas={notas}/>
      <Resultado somaNotas={notas.nota1+notas.nota2+notas.nota3+notas.nota4}/>
    </>
  );
}

export default App;