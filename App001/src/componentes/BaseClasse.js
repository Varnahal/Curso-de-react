import React from "react";

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canal:'Varnahal',
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status = this.props.status
        let ad = ativarDesativar.bind(this)
        //instruções do construtor
    }

    ativarDesativar(){
        this.setState(
            state=>{
                ativo=!ativo
            }
        )
    }

    componentDidMount(){
        console.log('componente criado')
    }
    componentDidUpdate(){
        console.log('componente atualizado')
    }
    componentWillUnmount(){
        console.log('componente remoovido')
    }

    render(){
        return(
            <>
            Varnahal
            <button onClick={this.ad}>ativar / desativar</button>
            <button onClick={()=>{this.ativarDesativar()}}>ativar / desativar</button>
            
            </>
        )
    }


}