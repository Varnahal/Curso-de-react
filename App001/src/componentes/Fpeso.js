import React from "react";

export default function Fpeso(p,sp){
        return(
          <div>
            <label>Peso</label>
            <input type='text' value={p} onChange={(e)=>{sp(e.target.value)}}></input>
          </div>
        )
}