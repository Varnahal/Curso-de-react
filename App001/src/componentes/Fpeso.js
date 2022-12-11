import React from "react";

export default function Fpeso(props){
        return(
          <div>
            <label>Peso</label>
            <input type='text' value={props.p} onChange={(e)=>{props.sp(e.target.value)}}></input>
          </div>
        )
}