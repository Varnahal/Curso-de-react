import React from "react";

export default function Relogio(){
    let hor = new Date();
    return(
        hor.toLocaleString()
    )
}