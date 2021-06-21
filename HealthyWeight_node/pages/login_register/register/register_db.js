var express = require('express')
var router = express.Router()
var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')
var generalDb = require('../../../General_DB.js')

let Register= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=3  ORDER BY forms_items.id ASC")
}

let Quest= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=4")
}




let Content= async()=>{
  return  JSON.parse('{"Register":'+JSON.stringify(await Register())+',"Quest":'+JSON.stringify(await Quest())+"}")
}




module.exports.RegisterPageJson= async()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
