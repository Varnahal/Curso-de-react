import React from "react";

export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>Canal: {this.props.canal}</h1>
        )
    }
}