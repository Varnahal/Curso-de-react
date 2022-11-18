import React from "react";

export default function Nota(props){
    return(
    <div>
        <legend>Informe a nota: {props.num}</legend>
        <input type='number' value={props.nota} onChange={
        
            (e)=>{
                if(props.num==1){
                    props.setnotas({"nota1":parseFloat(e.target.value),"nota2":props.notas.nota2,"nota3":props.notas.nota3,"nota4":props.notas.nota4})
                }else if(props.num==2){
                    props.setnotas({"nota1":props.notas.nota1,"nota2":parseFloat(e.target.value),"nota3":props.notas.nota3,"nota4":props.notas.nota4})
                }else if(props.num==3){
                    props.setnotas({"nota1":props.notas.nota1,"nota2":props.notas.nota2,"nota3":parseFloat(e.target.value),"nota4":props.notas.nota4})
                }else if(props.num==4){
                    props.setnotas({"nota1":props.notas.nota4,"nota2":props.notas.nota2,"nota3":props.notas.nota3,"nota4":parseFloat(e.target.value)})
                }
                
                
            }
        
        
        }></input>
      </div>
    )
}