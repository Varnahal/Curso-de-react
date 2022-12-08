import React from "react";

export default class Cresultado extends React.Component{
    constructor(props){
        super(props)
        //instruções do construtor
    }

    render(){
      return(
        <div>
          <p>Resultado:{this.props.res.toFixed(2)}</p>
        </div>
      )
      }


}