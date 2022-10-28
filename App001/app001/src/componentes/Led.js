import React from "react";
import verde from './imgs/verde.png'
import vermelho from './imgs/vermelho.png'

export default function Led(props) {

  return(
    <>
      <h1>Varnahal</h1>
      <img onClick={()=>props.setligado(!props.ligado)} src={props.ligado?verde:vermelho}></img>
    </>
  );
}