import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  
    // localStorage.setItem("nome","Vanahal");
    // localStorage.setItem("nome","Daniel");
    // localStorage.getItem("nome");
    // localStorage.removeItem("nome")

    const[nome,setnome] = useState("");

    const armazenar = (Chave,valor)=>{
      localStorage.setItem(Chave,valor)
    }
    const Consultar = (Chave)=>{
      alert(localStorage.getItem(Chave))
    }
    const apagar = (Chave)=>{
      localStorage.removeItem(Chave)
      alert("removido com sucesso")
    }

  return (
    <>
      <label>Digite um nome</label>
      <input type="text" value={nome} onChange={(e)=>{setnome(e.target.value)}}></input>
      <button onClick={()=>{armazenar("nome",nome)}}>Guardar</button>
      <button onClick={()=>{Consultar("nome")}}>consultar</button>
      <button onClick={()=>{apagar("nome")}}>apagar</button>
    </>
  );
}

export default App;