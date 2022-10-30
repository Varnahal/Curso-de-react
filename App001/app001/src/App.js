import React,{useState} from "react";
import './App.css'

export default function App() {
  const[pal,setpal] = useState('')
  function EventBTN(){
    let value = document.getElementById("inputId").value
    
    if(value == "buraco"){
      setpal('Buraco negro')
    }
  }
  return(
    <>
    <input type="text" id="inputId" ></input>
    <button onClick={()=>{EventBTN()}}>enviar</button>
    <p>{pal}</p>
    </>
  );
}