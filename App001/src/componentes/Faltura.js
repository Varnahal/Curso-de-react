import React from "react";

export default function Faltura(props){
        return(
          <div>
            <label>altura</label>
            <input type='text' value={props.a} onChange={(e)=>{props.sa(e.target.value)}}></input>
          </div>
        )
}