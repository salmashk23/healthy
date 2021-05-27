var express = require('express')
var router = express.Router()
// var contactus = require("./contact_us_items/contact_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')

let Content = async ()=>{
    return await generalDb.DbQuery("SELECT * FROM forms_items WHERE forms_id=1 ")
    // return (contactus)
}


module.exports.ContactPageJson= async ()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
