import React from "react";
import "./about.css"

export default function About(props) {
  function volver(e){
    props.logOut()
  }
    return (
    
      <div className="conteiner">
        <button id="but" onClick={(e)=>volver(e)} className="bot">Volver</button>
        <div className="h1"> <h1> Info de creador: </h1>
        <h3>
            Me llamo Fernando Jose Fantini ,vivo en Cordoba/Argentina,Y este es mi primera vez en front end y back end,
             Este es mi primer proyecto y espero que te guste </h3></div>
       
           
      <div >
        <h2>Descrip de Proyecto: </h2>
         <h3>Esta es una app que esta basada en la famosa serie Rick and Morty en la que tu puedes ver la info de sus personajes.</h3>
      </div>
        
        
        
      </div>
    );
 }