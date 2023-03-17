import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import validate from './validate';

export default function Loguin({login}) {
  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [errors, setErrors] = React.useState({ username: '', password: '' });
 const handleUserChange=(e)=>{
setUserData({
  ...userData,
[e.target.name]:e.target.value
})
setErrors(validate({...userData,
  [e.target.name]:e.target.value
}),)
 }
 function handleSubmit(e){
e.preventDefault()
login(userData)
 }

    return (
        <div className='ALL'>
          <br/>
          <div className='welcome'>
            <h1>Welcome</h1>
            <h2>to Rick and Morty</h2>
            <Link to="/About"><button id='welcome1'>App!</button>
       </Link>
              
              </div>
          
         <form onSubmit={((e)=>{
          handleSubmit(e)
         })}> 
          <div className='Conteiner'> 
       <label className='user'>Username</label>
           <input 
           className={errors.username ? "danger":"imp"}
           onChange={(e)=>handleUserChange(e)} 
           name='username' 
           type="text"
            placeholder="Escribe tu email">
            </input>
            <p className='warning'>{errors.username}</p>
           <label id='pass'>Password</label>
           <input className={errors.password ? "danger":"imp"} onChange={(e)=>handleUserChange(e)}
            name="password"
              type="text" 
              placeholder="Tu contraseña">
              </input>
              <p className='warning'>{errors.password}</p>
           <button type='submit' id='button'>Login</button>
           <br></br>
          </div>
        </form>
      </div>
             )}
