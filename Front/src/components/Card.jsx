import "./Cards.css"
import "./Nav.css"
import { Link } from 'react-router-dom'
import {add_pj,delete_pj} from "../redux/actions"
import {useDispatch,useSelector} from "react-redux"
import React from "react"
export default function Card(props) {
   
   const [isFav,setFav]=React.useState(false)
   const dispatch=useDispatch()
   const myFavorites=useSelector((s)=>s.myFavorites)
   function handleFavorite(ch){
      if(isFav){
     setFav(false)
     dispatch(delete_pj(ch.id))
      }else{
         setFav(true)
         dispatch(add_pj(ch))
      }
   }
   React.useEffect(() => {
      myFavorites.forEach((ch) => {
         if (ch.id === props.id) {
            setFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className="Caja">
          
          
         
<div className="OtraCaja">

   <h3>{props.species}</h3> 
   <h3>|</h3>  
   <h3>{props.gender}</h3> 
   <h3>|</h3>
   
  { isFav ? (
      <button id="tru" onClick={()=>handleFavorite(props)}>❤️</button>
   ) : (
      <button id="fal" onClick={()=>handleFavorite(props)}>🤍</button>
   )
   }
 
   <button id="boton" onClick={props.onClose}>X</button>
         </div>
         <img src={props.image} alt="" ></img>
          <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
      </div>
   );
}
