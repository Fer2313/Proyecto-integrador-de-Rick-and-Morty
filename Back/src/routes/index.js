let express=require("express")
const   router = require("./route1")
const rout=express.Router()


rout.use("/rickandmorty",router)




module.exports={
    rout,
   
}