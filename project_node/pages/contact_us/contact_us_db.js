var express = require('express')
var router = express.Router()
var contactus = require("./contact_us_items/contact_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Content=()=>{
  return (contactus)
}


module.exports.ContactPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
