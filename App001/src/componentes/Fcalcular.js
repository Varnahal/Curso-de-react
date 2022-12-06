import React from "react";

export default function Fcalcular(p,a,sr){
        const calc=()=>{
            sr(p/(a*a));
        }
        return(
          <div>
            <button onClick={calc}>Calcular</button>
          </div>
        )
}