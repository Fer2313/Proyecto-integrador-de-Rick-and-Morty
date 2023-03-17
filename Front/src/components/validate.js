const rexegUsername=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const rexegPassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/

export default function validate({username,password}){
   const errors= {};
   if (!username) {
    errors.username="El campo username esta vacio"
   }
   else if(!rexegUsername.test(username)){
    errors.username="Introduce un email valido"
   }
   else if (username.length>35) {
    errors.username="Este campo solo deja 35 caracteres"
   }
   else if(!password){
    errors.password="El campo password esta vacio"
   }
   else if(!rexegPassword.test(password)){
    errors.password="Faltan Mayusculas, Numeros y Se nesesita entre 6 y 16 caracteres."
        }
        console.log(errors)
    return errors
}