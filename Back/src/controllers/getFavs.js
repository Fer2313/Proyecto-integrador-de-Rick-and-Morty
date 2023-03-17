const characters=require("../utils/favs")
function getFavs(res) {
    res.status(200).json(characters)
}
module.exports=getFavs;