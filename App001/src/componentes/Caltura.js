import React from "react";

export default class Caltura extends React.Component{
    constructor(props){
        super(props)
        //instruções do construtor
    }

    render(){
        return(
            <div>
              <label>altura</label>
              <input type='text' value={this.props.a} onChange={(e)=>{this.props.sa(e.target.value)}}></input>
            </div>
          )
    }


}