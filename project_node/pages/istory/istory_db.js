var express = require('express')
var router = express.Router();
var istorydesc = require('./istory_items/desc_items.json')
var istorypost = require('./istory_items/post_items.json')
var header = require('../../parts/header/header_controller.js')
var footer = require('../../parts/footer/footer_controller.js')


let Desc =()=> {
  return(istorydesc)
}

let Post =()=> {
  return(istorypost)
}

let Content=()=>{
  return  JSON.parse('{"Desc":'+JSON.stringify(Desc())+',"Post":'+JSON.stringify(Post())+"}")
}


module.exports.IstoryPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
