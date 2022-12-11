import React from "react";

export default class Ccalcular extends React.Component{
    constructor(props){
        super(props)
        //instruções do construtor
    }
    calc=()=>{
        this.props.sr(this.props.p/(this.props.a*this.props.a));
    }

    render(){
        return(
            <div>
              <button onClick={()=>{this.calc()}}>Calcular</button>
            </div>
          )
    }


}