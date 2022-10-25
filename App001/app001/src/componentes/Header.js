import React from "react"
import Logo from './imgs/16002760_574313126111301_7408436797266562838_n.jpg'

  export default function Header() {
    return(
      <header>
        <img src={Logo}></img>
        <h1>Varnahal</h1>
      </header>
    );
  }