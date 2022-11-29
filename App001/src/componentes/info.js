import React,{useState} from 'react';
import Globais from './Globais.js';

function info() {

  return (
    <>
      <p>canal: {Globais.canal}</p>
      <p>curso: {Globais.curso}</p>
      <p>ano: {Globais.ano}</p>
      <hr></hr>
    </>
  );
}

export default info;