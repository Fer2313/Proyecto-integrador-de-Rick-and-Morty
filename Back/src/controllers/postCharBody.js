const characters=require("../utils/favs")
function postCharBody(req,res) {
    body=req.body
    searchid=characters.find((char)=>{return char.id===body.id})
    console.log(body.id)
    if(searchid){
        res.status(404).json({error:"Ya esta ese personaje"})
    }else{
        characters.push(body)
        res.status(200).json(body)
    }
}
module.exports=postCharBody;



