import Card from './Card';
import "./Cards.css"
import Home from './Home';

export default function Cards(props) {
  const {characters}=props
 return(

   <div className="Contenido">{
       characters.length?characters.map((character,index)=>{return<Card onClose={()=>props.onClose(character.id)} key={index} name={character.name} species={character.species} gender={character.gender} image={character.image} id={character.id}/>
         }):<Home></Home>
      }
      </div>
 )
   
}
