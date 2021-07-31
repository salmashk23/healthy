var header = require('../../parts/header/header_controller.js')
var footer = require('../../parts/footer/footer_controller.js')
var generalDb = require('../../General_DB.js')

let Desc = async()=> {
  return await generalDb.DbQuery("SELECT * FROM carousel_items WHERE carousel_id=3")

}

let Post = async()=> {
  return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=5")
}

let UserPost = async () => {
  return await generalDb.DbQuery("SELECT * FROM istory_users_posts"+
                                 " JOIN users ON istory_users_posts.userid = users.iduser"+
                                 " ORDER BY istory_users_posts.date DESC");
}

let Content= async()=>{
  return  JSON.parse('{"Desc":'+JSON.stringify(await Desc())+
                     ',"Post":'+JSON.stringify(await Post())+
                     ',"UserPost":'+JSON.stringify(await UserPost())+"}")
}


module.exports.IstoryPageJson= async (req)=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "picture_url": (JSON.stringify(req.session.picture_url) || false),
        "Footer": await footer.Footer()
})}
