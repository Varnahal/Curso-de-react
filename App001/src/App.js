import React,{useState,useEffect} from 'react';
import './App.css';

  const carros= [
    {categoria:"esporte",preco:"110000",modelo:"Golf Gti"},
    {categoria:"esporte",preco:"120000",modelo:"camaro"},
    {categoria:"SUV",preco:"85000",modelo:"HRV"},
    {categoria:"SUV",preco:"83000",modelo:"T-Cross"},
    {categoria:"Ultilitario",preco:"125000",modelo:"Hillux"},
    {categoria:"Ultilitario",preco:"90000",modelo:"Ranger"},

  ]
  const linhas=(cat)=>{
    const li=[]
    carros.forEach(
      (carro)=>{
        if(carro.categoria.toUpperCase()==cat.toUpperCase()||cat==''){
          li.push(
            <tr>
              <td>{carro.categoria}</td>
              <td>{carro.preco}</td>
              <td>{carro.modelo}</td>
            </tr>
          )
        }
      }
    )
    return li
  }

  const tabelacarros=(cat)=>{
    return(
      <table border= '1' style={{borderCollapse:'colapse'}}>
        <thead>
          <tr>
            <th>Categoria</th><th>Preço</th><th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {linhas(cat)}
        </tbody>
      </table>
    )

  }
  const pesquisacat=(cat,scat)=>{
    return(
      <div>
        <label>Digite uma categoria</label>
        <input type='text' value={cat} onChange={(e)=>{scat(e.target.value)}}></input>
      </div>
    )

  }

function App() {
  const [categoria,setcategoria] = useState('');



  return (
    
      <>
      {pesquisacat(categoria,setcategoria)}
        {tabelacarros(categoria)}
      
      </>
      
    
  );
}

export default App;