let characters=require("../utils/favs")
function deleteFavs(req,res) {
    let id=req.params.id
    const searchid=characters.find(char=>char.id === parseInt(id))
    console.log(searchid)
    if (searchid) {
         const deleteChar=characters.filter(char => char.id !== parseInt(id))
        characters=deleteChar
       return res.status(200).json(characters)
    }else{
     res.status(404).json({message:"Personaje a eliminar no encontrado"})
    }          
}
module.exports=deleteFavs;