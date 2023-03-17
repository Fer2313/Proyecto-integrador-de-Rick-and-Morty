import React from "react";
import "./Nav.css"
export default function SearchBar(props) {
   const [character,setCharacter]= React.useState("")
function handleImput(e){
   setCharacter(e.target.value)
     
}
function setImput(e){
 setCharacter("")
}
  


   return (
      <div id="NavContent"> 
      <input onChange={(e)=>handleImput(e)} value={character} type='text' name="search" placeholder="Escribre aqui un numero"/>
      <button onClickCapture={()=>props.onSearch(character)} onClick={(e)=>setImput(e)} id="NavButton">Agregar</button> 
      <button id="Delimput" onClick={setImput}>BorrarID</button>
      </div>
   );
}
