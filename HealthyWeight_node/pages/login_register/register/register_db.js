var express = require('express')
var router = express.Router()
var register = require("./register_items/register_items.json")
var quest = require("./register_items/quest_items.json")
var body = require("./register_items/body_items.json")
var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')
var generalDb = require('../../../General_DB.js')

let Register= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=5 ")
  // return (register)
}

let Quest= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=4 ")
  // return (quest)
}

let Body= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=3 ")
  // return (body)
}


let Content= async()=>{
  return  JSON.parse('{"Register":'+JSON.stringify(await Register())+',"Quest":'+JSON.stringify(await Quest())+',"Body":'+JSON.stringify(await Body())+"}")
}




module.exports.RegisterPageJson= async()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
