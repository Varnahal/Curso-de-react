import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Canal: {props.canal}</p>
            <p>Curso: {props.curso}</p>
            <p>Nome: {props.nome}</p>
        </section>
    )
}