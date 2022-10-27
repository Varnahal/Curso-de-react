import React from "react";

export default function Numero(props){
    return(
        <p>
            <button onClick={()=>props.setNum(props.num+10)}>clique</button>
        </p>
    )
}