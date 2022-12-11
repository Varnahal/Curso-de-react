import React from "react";

export default class Cpeso extends React.Component{
    constructor(props){
        super(props)
        //instruções do construtor
    }

    render(){
      return(
        <div>
          <label>Peso</label>
          <input type='text' value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}></input>
        </div>
      )
    }


}