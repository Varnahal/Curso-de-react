import React from "react";
export default function Nome(props) {
     return(
        <>
            <p>{props.nome}</p>
            <input type='text' onChange={()=>props.setNome(this.innerHTML)}></input>
        </>
     )
}