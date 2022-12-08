import React,{useState} from 'react';
import './App.css';



export default function App(){

  const [valorTela, setvalorTela] = useState('')
  const [resultado,setresultado] = useState(0)
  const [acumulador, setacumulador] = useState(0)
  const [operado,setoperado] = useState(false)

  //funções

  const addDigitoTela=(d)=>{
    if(((d=='+'||d=='-'||d=='*'||d=='/')&&operado)){
      console.log('+-*/')
      setoperado(false)
      setvalorTela(resultado+d)
      return
    }
    if(operado){
      setvalorTela(d)
      setoperado(false)
      return
    }
    const valorDigitadoNaTela=valorTela+d
    setvalorTela(valorDigitadoNaTela)
  }
  const limparMemoria=()=>{
    setoperado(false)
    setvalorTela('')
    setresultado(0)
    setacumulador(0)
    return
  }

  //componentes
  const Tela=(valor,res)=>{
    return(
      <div style = {csstela}>
        <span style={csstelaRes}>{valor}</span>
        <span style={csstelaRes}>{res}</span>
      </div>
    )
  }
  const Btn=(label,oC)=>{
    return (
      <button style={cssBtn} onClick={oC}>{label}</button>
    )
  }
  //estilos
  const csstela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItens:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    window:260,
  }
  const csstelaOper={
    fontSize:25,
    color:'#fff',
    height:20,
  }
  const csstelaRes={
    fontSize:50,
    color:'#fff',
  }
  const cssBtn={
    fontSize:30,
    height:75,
    width:75,
    paddig:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor:'#000',
    textAlign:'center',
    outline:'none',
  }

  return (
    
      <>
        
      </>
      
    
  );
}