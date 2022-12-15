import React,{useEffect,useState} from 'react'

export default function ListaCarros(){

    const [carros,setcarros]=useState([])
    useEffect(()=>{
        fetch('https://DeeppinkNumbSpof.danielmarcelin3.repl.co')
            .then(res=>res.json())
            .then(
                (resultado)=>{
                    setcarros(resultado)

            })







        // axios.get('https://DeeppinkNumbSpof.danielmarcelin3.repl.co')
        // .then(res=>{
        //     const dadosCarros=res.data
        //     setcarros(dadosCarros)
        // })
    })

    return(
        <div>
            {carros.map(
                carros=><div key={carros.id}>{carros.marca} - {carros.modelo}</div>
            )}
        </div>
    )

}