var express = require('express')
var router = express.Router();
var psychdesc = require('./psycho_items/desc_psych.json')
var psychitem = require('./psycho_items/psycho_items.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')

let Note = async()=> {
    return await generalDb.DbQuery("SELECT * FROM carousel_items WHERE carousel_id=4 ")
  // return(psychdesc)
}

let Psych = async()=> {
    return await generalDb.DbQuery("SELECT * FROM psychology_card_items")
  // return(psychitem)
}

let Content= async()=>{
  return JSON.parse('{"Note":'+JSON.stringify(await Note())+',"Psych":'+JSON.stringify(await Psych())+"}")
}


module.exports.PsychoPageJson= async ()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
