var express = require('express')
var router = express.Router();
var psychdesc = require('./psycho_items/desc_psych.json')
var psychitem = require('./psycho_items/psycho_items.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Note =()=> {
  return(psychdesc)
}

let Psych =()=> {
  return(psychitem)
}

let Content=()=>{
  return JSON.parse('{"Note":'+JSON.stringify(Note())+',"Psych":'+JSON.stringify(Psych())+"}")
}


module.exports.PsychoPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
