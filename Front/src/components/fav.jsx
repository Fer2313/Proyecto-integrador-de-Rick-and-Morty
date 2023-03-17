import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { filter_cards,order_cards,reset_cards } from '../redux/actions'
import Card from './Card'
import "./Cards.css"
import "./fav.css"
import Home from './Home'

export default function Fav(props) {
  const dispatch= useDispatch()
    const myFavorites=useSelector((s)=>s.myFavorites)
   function reset(){
dispatch(reset_cards())
   }
    function handleClick(e){
      const {value,name}=e.target
     if(name==="Filter"){
      dispatch(filter_cards(value))
     }
     if(name==="Order"){
      dispatch(order_cards(value))
     }
    }
  return (
    
<div>
    <Link to="/home">
    <button id='but'>Home</button>
    </Link>
    <br />
    <div>
        <button id='butt' onClick={(e)=>reset(e)}>reset</button>
       
        <select name="Order" defaultValue="DEFAULT" onChange={handleClick}>
          <option value="DEFAULT" disabled>Select Order</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name='Filter' defaultValue="DEFAULT" onChange={handleClick}>
        <option value="DEFAULT" disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select>
      
      </div>

    <div className="Contenido">
      
    {
      myFavorites.length?myFavorites.map((character,index)=>{return<Card onClose={()=>props.onClose(character.id)} key={index} name={character.name} species={character.species} gender={character.gender} image={character.image} id={character.id}/>
         }):<Home></Home>
      }
    </div>
    <br />
    </div>
  )
}
