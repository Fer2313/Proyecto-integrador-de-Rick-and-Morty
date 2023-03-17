import { ADD_PJ,DELETE_PJ,FILTER,ORDER,RESET } from "./action_type";
import axios from "axios"
export const add_pj=(ch)=>{
   
    return function (dispatch) {
        axios.post("http://localhost:3001/rickandmorty/fav",ch)
        .then((data)=>
        dispatch({
    type:ADD_PJ,
    payload:data
    }
    ))
        
    }
    
    
  
}
export const delete_pj=(id)=>{
    return function (dispatch) {
        axios.delete("http://localhost:3001/rickandmorty/fav/"+id)
        .then((v)=>v.data)
        .then((data)=>
        dispatch({
    type:DELETE_PJ,
    payload:id
    }
    ))
        
    }
   
}
export const filter_cards=(status)=>{
return{
    type:FILTER,
    payload:status
}
}
export const order_cards=(id)=>{
return{
    type:ORDER,
    payload:id
}
}
export const reset_cards=()=>{
    return{
        type:RESET,
        
    }
    }

/*
Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status. La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.
Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.
*/
