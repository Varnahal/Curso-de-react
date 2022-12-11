import React,{useState} from 'react';
import './App.css'

export default function App(){

  const [valorTela, setvalorTela] = useState('')
  const [resultado,setresultado] = useState(0)
  const [acumulador, setacumulador] = useState(0)
  const [operado,setoperado] = useState(false)
  const [podeoper,setpodeoper] = useState(true)

  //funções

  const addDigitoTela=(d)=>{
    

    if(((d=='+'||d=='-'||d=='*'||d=='/')&&operado&&podeoper)){
      console.log('1')
      console.log('+-*/')
      setoperado(false)
      setvalorTela(resultado+d)
      setpodeoper(false)
      return
    }
    if(operado){
      console.log('2')
      setvalorTela(d)
      setoperado(false)
      setpodeoper(true)
      return
    }
    if(!podeoper){
      console.log('aqui')
      if(!(d=='+'||d=='-'||d=='*'||d=='/')){
        console.log('3')
        const valorDigitadoNaTela=valorTela+d
        setvalorTela(valorDigitadoNaTela)
        setpodeoper(true)
      }   
    }else{
      console.log('5')
      if(d=='+'||d=='-'||d=='*'||d=='/'){
        const valorDigitadoNaTela=valorTela+d
        setvalorTela(valorDigitadoNaTela)
        setpodeoper(false)
      }else{
        setpodeoper(true)
        const valorDigitadoNaTela=valorTela+d
        setvalorTela(valorDigitadoNaTela)
      }
        
    }
    
  }
  const limparMemoria=()=>{
    setoperado(false)
    setvalorTela('')
    setresultado(0)
    setacumulador(0)
    setpodeoper(true)
    return
  }
  const operacao = (oper)=>{
    if(oper =='bs'){
      let vtela= valorTela
      vtela = vtela.substring(0,(vtela.length-1))
      setvalorTela(vtela)
      setoperado(false)
      return
    }
    try{
      const r = eval(valorTela) //calculo
      setacumulador(r)
      setresultado(r)
      setoperado(true)
    }catch{
      setresultado('ERRO')
    }
  }

  //componentes
  const Tela=(valor,res)=>{
    return(
      <div style = {csstela}>
        <span style={csstelaOper}>{valor}</span>
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
  const cssConteiner = {
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    width:300,
    border:'1px solid #000',
    margin:'20px',
  }
  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap',
  }
  const csstela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    width:260,
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
      <div style={cssConteiner}>
        <h3>Calculadora</h3>
        {Tela(valorTela,resultado)}
        <div style={cssBotoes}>
          {Btn("AC",limparMemoria)}
          {Btn("(",()=>{addDigitoTela('(')})}
          {Btn(")",()=>{addDigitoTela(')')})}
          {Btn("/",()=>{addDigitoTela('/')})}
          {Btn("7",()=>{addDigitoTela('7')})}
          {Btn("8",()=>{addDigitoTela('8')})}
          {Btn("9",()=>{addDigitoTela('9')})}
          {Btn("*",()=>{addDigitoTela('*')})}
          {Btn("4",()=>{addDigitoTela('4')})}
          {Btn("5",()=>{addDigitoTela('5')})}
          {Btn("6",()=>{addDigitoTela('6')})}
          {Btn("-",()=>{addDigitoTela('-')})}
          {Btn("1",()=>{addDigitoTela('1')})}
          {Btn("2",()=>{addDigitoTela('2')})}
          {Btn("3",()=>{addDigitoTela('3')})}
          {Btn("+",()=>{addDigitoTela('+')})}
          {Btn("0",()=>{addDigitoTela('0')})}
          {Btn(".",()=>{addDigitoTela('.')})}
          {Btn("<-",()=>{operacao('bs')})}
          {Btn("=",()=>{operacao('=')})}

        </div>
      </div>
        
      </>
      
    
  );
}