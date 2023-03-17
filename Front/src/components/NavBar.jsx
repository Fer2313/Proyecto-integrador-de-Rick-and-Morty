import React from 'react'
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function NavBar(props) {
  return (
    <div className='NavContainer'>
         <div>
        <SearchBar onSearch={props.onSearch}/>
    </div>
    
    
       <div className='Botones'>
        <Link to="/home">
       <button id='h'>Home</button>
       </Link>
       
        <Link to="/fav"> <button id='f'>Fav</button>
        </Link>
   
   
   
    
    
    
   
    </div>
    <button onClick={(e)=>props.logOut(e)} id="c">LogOut</button>
    
    
    </div>
   
  )
}
