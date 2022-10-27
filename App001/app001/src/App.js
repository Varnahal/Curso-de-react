import React from "react";
import './App.css'

export default function App() {
  const textoDestaque = {
    color:'red',
    fontSize:'100px'
  }
  return(
    <section className="caixa">
      <h1 style={textoDestaque}>Varnahal</h1>
      <h2 style={{color:'black',fontSize:'50px'}}>Curso de react</h2>
      <p className="texto">Se inscreva no vanal varnahal</p>
      <a href="#">Clique em mim</a>
    </section>
  );
}