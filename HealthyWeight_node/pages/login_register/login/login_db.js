var express = require('express')
var router = express.Router()
// var login = require("./login_items.json")
var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')
var generalDb = require('../../../General_DB.js')

let Content= async()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=2 ")
  // return (login)
}


module.exports.LoginPageJson= async()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
