var express = require('express')
var router = express.Router()
var homeitems = require("./home_items/carousel_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')

let CarouselItems = async()=> {
  return await generalDb.DbQuery("SELECT * FROM carousel_items WHERE carousel_id=1")
}

let Tips= async()=> {
  return await generalDb.DbQuery("SELECT image,title,text FROM short_post_item WHERE id=1")
}

let ArtPost= async()=> {
  return await generalDb.DbQuery("SELECT * FROM short_post_item WHERE id=2")
}



let Content= async()=>{
  return  JSON.parse('{"CarouselItems":'+JSON.stringify(await CarouselItems())
                      +',"Tips":'+JSON.stringify(await Tips())
                      +',"ArtPost":'+ JSON.stringify(await ArtPost())+"}")
}



module.exports.HomePageJson= async(req)=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
