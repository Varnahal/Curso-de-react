import axios from 'axios'
import React,{useEffect,useState} from 'react'

export default function ListaCarros(){

    const [carros,setcarros]=useState([])
    useEffect(()=>{
        axios.get('https://DeeppinkNumbSpof.danielmarcelin3.repl.co')
        .then(res=>{
            const dadosCarros=res.data
            setcarros(dadosCarros)
        })
    })

    return(
        <div>
            {carros.map(
                carros=><div key={carros.id}>{carros.marca} - {carros.modelo}</div>
            )}
        </div>
    )

}