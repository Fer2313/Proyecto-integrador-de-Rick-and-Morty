const {Router}=require("express")
const getCharById=require("../controllers/getCharById")
const getCharDetail=require("../controllers/getCharDetail")
const postCharBody=require("../controllers/postCharBody")
const getFavs=require("../controllers/getFavs")
const deleteFavs=require("../controllers/deleteFavs")


const router=Router();
router.get("/onsearch/:id",(req,res)=>{
  getCharById(req,res)
})
router.get("/detail/:id",(req,res)=>{
  getCharDetail(req,res)
})
router.get("/fav",(req,res)=>{
  getFavs(res) 
})
router.post("/fav",(req,res)=>{
postCharBody(req,res)
})
router.delete("/fav/:id",(req,res)=>{
deleteFavs(req,res)
})

 
 module.exports=router;
 
