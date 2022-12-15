import axios from 'axios'
import React from 'react'

export default class ListaCarros extends React.Component{

    state={
        carros:[]
    };

componentDidMount(){
    axios.get('https://DeeppinkNumbSpof.danielmarcelin3.repl.co')
        .then(res=>{
            const dadosCarros=res.data
            this.setState({carros:dadosCarros})
        })
}

render(){
    return(
        <div>
            {this.state.carros.map(
                carros=><div key={carros.id}>{carros.marca} - {carros.modelo}</div>
            )}
        </div>
    )
}

}