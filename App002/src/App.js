import react,{useState} from 'react'
import './App.css';

export default function App() {

  //Estilos

  const tabu ={
    fisplay:'flex',
    flexDirection:'row'
  }

  const tabuLinha = {
    display:'flex',
    flexDirection:'row'
  }
  const casa ={
    width:100,
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    cursor:'pointer',
    fontSize:60,
    border:'1px solid #000'

  }
  const jogoInicial = [
    ['','',''],
    ['','',''],
    ['','','']
  ]
  const [jogo,setjogo] = useState(jogoInicial)
  const [simboloatual,setsimboloatual] = useState('X')
  const [jogando,setjogando]=useState(true)
  const [jogadas,setjogadas]=useState(0)

  const tabuleiro=(j)=>{
    return(
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick={(e)=>{joga(e)}}>{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick={(e)=>{joga(e)}}>{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick={(e)=>{joga(e)}}>{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick={(e)=>{joga(e)}}>{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick={(e)=>{joga(e)}}>{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick={(e)=>{joga(e)}}>{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick={(e)=>{joga(e)}}>{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick={(e)=>{joga(e)}}>{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick={(e)=>{joga(e)}}>{j[2][2]}</div>
        </div>
      </div>
    )
  }
  const btnJogarNovamente=()=>{
    if(!jogando){
      return(
        <button onClick={()=>{reiniciar()}}>Jogar Novamente</button>
      )
    }
  }

  const verificaVitoria=()=>{
    //linhas
    let pontos=0
    let vitoria=false
    for (let l = 0; l < 3; l++) {
      pontos=0
      for (let c = 0; c < 3; c++) {
        if(jogo[l][c]==simboloatual){
          pontos++
        }
        
      }
      if(pontos>=3){
        vitoria=true
        setjogando(false)
        break
      }
    }
    //colunas
    for (let c = 0; c < 3; c++) {
      pontos=0
      for (let l = 0; l < 3; l++) {
        if(jogo[l][c]==simboloatual){
          pontos++
        }
        
      }
      if(pontos>=3){
        vitoria=true
        setjogando(false)
        break
      }
      
    }

    //diagonais
    pontos=0
    for (let d = 0; d < 3; d++) {
        if(jogo[d][d]==simboloatual){
          pontos++
        }
    }
    if(pontos>=3){
      vitoria=true
      setjogando(false)
      
    }
    pontos=0
    let l=0
    for (let c = 2; c >=0; c--) {
      if(jogo[l][c]==simboloatual){
        pontos++
      }
      l++
    }
    if(pontos>=3){
      vitoria=true
      setjogando(false)
      
    }
    return vitoria

  }
  const trocaJogador=()=>{
    simboloatual=='X'?setsimboloatual('O'):setsimboloatual('X')
  }
  const retPos=(e)=>{
    const p = e.target.getAttribute('data-pos')
    const pos = [parseInt(p.substring(0,1)),parseInt(p.substring(1,2))]
    return pos
  }
  const verificaespacovazio=(e)=>{
    if(jogo[retPos(e)[0]][retPos(e)[1]]==''){
      return true
    }else{
      return false
    }
  }
  const joga=(e)=>{

    if(jogando){
      if(verificaespacovazio(e)){
        jogo[retPos(e)[0]][retPos(e)[1]]=simboloatual
        trocaJogador()
        if(verificaVitoria()){
          trocaJogador()
          alert('Jogador'+ simboloatual + 'venceu!')
        }
      }else{
        alert('Este espaço indisponivel')
      }
      setjogadas(jogadas+1)
      if(jogadas>=8 && !verificaVitoria()){
        alert('Jogo empatado')
        setjogando(false)
      }
    }
  }

  const reiniciar=()=>{
    setjogando(true)
    setjogo(jogoInicial)
    setjogadas(0)
    setsimboloatual('X')
  }






  return (
    <>
      <div>
        <p>Quem joga: {simboloatual}</p>
      </div>
      <div>
        {tabuleiro(jogo)}
      </div>
      <div>
        {btnJogarNovamente()}
      </div>

    </>
  );
}

