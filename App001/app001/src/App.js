import React from "react";
import Logo from './componentes/imgs/16002760_574313126111301_7408436797266562838_n.jpg';
export default function App() {
  const canal=()=>{
    return("Varnahal")
  }
  const curso=()=>{
    return("Curso de react")
  }

  return(
    <>
    <section>
    <header>
      <p>Canal: {"de games->"+canal()}</p>
      <br/>
      <p>{curso()}</p>
    </header>
      <div>
        meu pao
      </div>
      <h1>José</h1>
      <img src={Logo}/>
      <h1>Penio</h1>
      <img src="/imgs/tenor.gif"/>
    </section>
    </>
  );
}