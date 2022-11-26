import React from "react";

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo = "Golf"
        this.state={
            ligado:false,
            velatual:0,
        }
        this.ld=this.ligar.bind(this)
    }
    ligar(){
        //this.state.ligado = true
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>({
                ligado:!state.ligado
            })
        )
        if(this.state.ligado){
            this.setState(
                (state)=>({
                    velatual:0
                })
            )
        }
    }
    acelerar(){
        if(this.state.ligado){
            this.setState(
                (props)=>(
                    {velatual:this.state.velatual +this.props.fator}
                )
            )
        }
        
    }

    componentDidMount(){
        console.log('o carro foi criado')
    }
    componentDidUpdate(){
        console.log('o carro foi atualizado')
    }
    componentWillUnmount(){
        console.log('o carro foi removido')
    }

    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p> 
                <p>Ligado: {this.state.ligado?"Ligado":"Desligado"}</p>
                <p>Velociade atual: {this.state.velatual}</p>
                <button onClick={this.ld}>
                {this.state.ligado?"Ligar":"Desligar"}
                    </button>
                    <button onClick={()=>{this.acelerar()}}>
                        acelerar
                    </button>
            </div>
            
        )
    }
}