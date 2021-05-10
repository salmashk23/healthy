var express = require('express')
var router = express.Router()
var homeitems = require("./home_items/carousel_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Content=()=>{
  return (homeitems)
}


module.exports.HomePageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
