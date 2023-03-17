const axios = require("axios")
const url ="https://rickandmortyapi.com/api/character/"
function getCharById(req,res){
    const params= req.params
    axios(url+params.id)
    .then((data)=>{
       const character={
           id:data.data.id,
           image:data.data.image,
           name:data.data.name,
           gender:data.data.gender,
           species:data.data.species
        }
        res.status(200).json(character)
    },(err)=>{
        if (err) {
            res.status(500).json({error:"Id dont Exist"})
        }
    })
    
}
module.exports=getCharById;

//image, name, gender, status, origin y species.
//id, image, name, gender y speciesconsole.log("estoy en charId")
  /*   
         res.writeHead(200,{"Content-type":"application/json"})
         res.end(JSON.stringify(character))
    },(err)=>{
        if (err) {
            res.writeHead(500,{"Content-type":"text/plain"})
           return res.end("Id dont Exist")
        }
    }) */