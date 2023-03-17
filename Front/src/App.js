import { Route,Routes,useLocation,useNavigate} from 'react-router-dom'
import React from 'react'
import './App.css'
import "./components/Cards.css"
import Cards from './components/Cards.jsx'
import "./App.css"
import "../src/components/Nav.css"
import Fav from './components/fav'
import NavBar from "./components/NavBar"
import  Loguin  from './components/Loguin'
import About from "./components/About"
import Detail from "./components/Detail"
import { useEffect, useState } from 'react'
//import Image from "../../imagen/876590.png"
function App(props) { 
function logOut(){
 
navigate("/")
}
  const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'entrar@gmail.com';
const password = '1Password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }else{
    alert("el usuario o la contraseña son incorrectos")
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);
  const location=useLocation()
  console.log(location)
  const [characters,setCharacter]=React.useState([]) 
  function onSearch(id){ 
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name){
        let exist=characters.find((e)=> e.id=== data.id)
        if (exist) {
          return window.alert("Ya hay un personaje con ese ID")
        }
          setCharacter((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
}
function onClose(id) {
  console.log(id)
  setCharacter((data)=>{
    return data.filter((e)=> e.id !== id)
  })
}
  return (
    
    <div className={location.pathname==="/"?"hola":'App'}  style={{paddingBottom:120,paddingTop:1}}>
      
      
        {location.pathname==="/fav"||location.pathname==="/"||location.pathname==="/About"?null:<div className='Nav'><NavBar logOut={logOut} onSearch={onSearch}/></div>}
   
         
        
  
      
      <Routes>
        
        <Route path='/' element={<Loguin login={login}/>}/>
          </Routes>
          
     <Routes> 
      <Route path='/fav' element={<Fav characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About logOut={logOut}/>}/>
      <Route path='/home'  element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>

</div>
      
   
  )
}

export default App

    