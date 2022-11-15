import React,{useState} from 'react';
import './App.css';

function App() {

  const [nome,setnome] = useState('');
  const [carro,setcarro] = useState('HRV');

  
  return (
    <>
      <form>
        <label>Digite seu nome: </label>
        <input type='text' name='fnome' onChange={(e)=>setnome(e.target.value)}></input>
        <p>Nome digitado:{nome}</p>
        <label>Selecione um carro</label>
        <select value={carro} onChange={(e)=>{setcarro(e.target.value)}}>
          <option value='HRV'>HRV</option>
          <option value='Golf'>Golf</option>
          <option value='Cruze'>Cruze</option>
          <option value='Argo'>Argo</option>
        </select>
        <p>Carro selecionado: {carro}</p>
      </form>
    </>
  );
}

export default App;