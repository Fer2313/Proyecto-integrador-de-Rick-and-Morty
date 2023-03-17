import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./estilado.css"

export default function Detail(props) {
    const {detailId}=useParams(props.id)
    const [character,setCharacter]=useState({})
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
  return (
    <div className='detail'>
        <h1 id='det'>Detail:</h1>
   
   <img src={character.image} alt="imag" ></img>
    <div className='Text'>
        
<h2>Name: {character.name}</h2>
<h3>Status: {character.status}</h3>
<h3>Specie: {character.species}</h3>
<h3>Gender: {character.gender}</h3>
<h3>Origin: {character.origin?.name}</h3>

    
    </div>
    </div>
  )
}
/*
Name
Status
Specie
Gender
Origin
Image
*/
