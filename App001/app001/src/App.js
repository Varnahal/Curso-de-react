import React,{useState} from "react";
import Led from "./componentes/Led"; 
import './App.css'

export default function App() {
  const [nome,setnome] = useState('nada aqui');
  const [tipo,settipo] = useState('nada aqui');
  const [tipo1,settipo1] = useState('nada aqui');
  const [id,setid] = useState('nada aqui');
  const [foto,setfoto] = useState();
  async function poke(nome) {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
      let data = await res.json()
      console.log(data)
      setnome(data.name)
      setid(data.id)
      settipo(data.types[0].type.name)
      setfoto(data.sprites.other.home.front_default)
      if(typeof data.types[1] == 'undefined'){
        settipo1('Não tem segundo tipo')
      }else{
        settipo1(data.types[1].type.name)
      }
      
      return (data);
    }
    

  return(
    <>
    <input id="nomepoke" type='text'></input>
      <button onClick={()=>{
        poke(document.getElementById('nomepoke').value)
      }}>Pesquisar</button>
    <div className="carta">
      <div className="foto">
        <img style={{width:'300px'}} src={foto}></img>
      </div>
      <div className="info">
        <h1>Id: {id}</h1>
        <h1>Nome do pokemon: {nome}</h1>
        <h1>Tipo: {tipo}</h1>
        <h1>segundo tipo: {tipo1}</h1>
      </div>
      
      
      
    </div>
      
    </>
  );
}