import React,{useState,useEffect} from 'react';
import Pagina1 from './componentes/Pagina1.js';
import Pagina2 from './componentes/Pagina2.js';
import './App.css';

function App() {

  const[pagina,setpagina] = useState(0)

  const linksPaginas = (p)=>{
    setpagina(p)
  }


  const retornarpagina = ()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return  <div>
                <button onClick={()=>{setpagina(1)}}>Pagina1</button>
                <button onClick={()=>{setpagina(2)}}>Pagina2</button>
              </div>
    
    }

  }

  return (
    
      <>
      {retornarpagina()}
      
      </>
      
    
  );
}

export default App;