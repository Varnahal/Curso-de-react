import React from 'react'
import Dados from "./Dados";

export default function Corpo() {
    const Canal = ()=>{
        return(<a href="https://www.youtube.com/channel/UCxF73PZPEZaO1H3mFpXhgZQ" target="_blank">Varnahal</a>)
      }
    return(
        <>
            <div>
                <h1>Varnahal é o melhor canal do mundo</h1>
                <p>Se inscreva no meu canal</p>
                <Dados canal={Canal()} nome='Vanahal' curso='React'/>
            </div>
        </>
    )
  }