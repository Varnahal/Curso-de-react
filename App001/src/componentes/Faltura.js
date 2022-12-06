import React from "react";

export default function Faltura(a,sa){
        return(
          <div>
            <label>altura</label>
            <input type='text' value={a} onChange={(e)=>{sa(e.target.value)}}></input>
          </div>
        )
}