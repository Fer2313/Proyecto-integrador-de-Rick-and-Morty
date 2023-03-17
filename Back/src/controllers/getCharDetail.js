const axios = require("axios")
const url="https://rickandmortyapi.com/api/character/"
 function getCharDetail(req,res) {
    const params= req.params
    axios(url+params.id)
    .then((data)=>{
       const character={         
           origin:data.data.origin,
           status:data.data.status,
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
module.exports=getCharDetail;
 