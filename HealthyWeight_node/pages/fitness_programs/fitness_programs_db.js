var express = require('express')
var router = express.Router()
// var videos =  require("./fitness_items/videos_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')



let Video = async()=> {
  return await generalDb.DbQuery("SELECT * FROM carousel_items WHERE carousel_id=2 ")
// return( dietitems)
}


let FitPrograms =async()=> {
  return await generalDb.DbQuery("SELECT *   FROM  fitness_programs_items")
}


let Content= async()=>{
return  JSON.parse('{"Video":'+JSON.stringify(await Video())+',"FitPrograms":'+JSON.stringify(await FitPrograms())+"}")
}


module.exports.FitnessPageJson= async ()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
