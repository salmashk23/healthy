var express = require('express')
var router = express.Router()
// var dietitems = require('./diet_items/diet_items.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')



let Diet = async()=> {
    return await generalDb.DbQuery("SELECT * FROM diet_programs_items")
  // return( dietitems)
}


let Recipe =async()=> {
    return await generalDb.DbQuery("SELECT *   FROM  diet_programs_recipe_items")
}




let Content= async()=>{
  return  JSON.parse('{"Diet":'+JSON.stringify(await Diet())+',"Recipe":'+JSON.stringify(await Recipe())+"}")
}


module.exports.DietPageJson= async (req)=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
