import React from "react";

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo = "Golf"
        this.state={
            ligado:false,
            velatual:0,
        }
    }
    ligar(){
        //this.state.ligado = true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>({
                ligado:!state.ligado
            })
        )
    }
    acelerar(){
        this.setState(
            (props)=>(
                {velatual:this.state.velatual +this.props.fator}
            )
            
        )
    }
    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p> 
                <p>Ligado: {this.state.ligado?"Ligado":"Desligado"}</p>
                <p>Velociade atual: {this.state.velatual}</p>
                <button onClick={()=>{this.ligar()}}>
                {this.state.ligado?"Ligar":"Desligar"}
                    </button>
                    <button onClick={()=>{this.acelerar()}}>
                        acelerar
                    </button>
            </div>
            
        )
    }
}