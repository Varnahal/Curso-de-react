import React from "react";

export default function Caixa(props){
    return(
        <>
            {props.site}
            {props.children[0]}
        </>
    )
}
