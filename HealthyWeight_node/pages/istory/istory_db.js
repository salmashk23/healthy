var express = require('express')
var router = express.Router();
var istorydesc = require('./istory_items/desc_items.json')
var istorypost = require('./istory_items/post_items.json')
var header = require('../../parts/header/header_controller.js')
var footer = require('../../parts/footer/footer_controller.js')
var generalDb = require('../../General_DB.js')

let Desc = async()=> {
    return await generalDb.DbQuery("SELECT * FROM carousel_items WHERE carousel_id=3")
  // return(istorydesc)
}

let Post = async()=> {
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=6")
  // return(istorypost)
}

let Content= async()=>{
  return  JSON.parse('{"Desc":'+JSON.stringify(await Desc())+',"Post":'+JSON.stringify(await Post())+"}")
}


module.exports.IstoryPageJson= async ()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
