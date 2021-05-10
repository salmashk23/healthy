var express = require('express')
var router = express.Router()
var videos =  require("./fitness_items/videos_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Content=()=>{
  return (videos)
}


module.exports.FitnessPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
