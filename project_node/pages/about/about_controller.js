var express = require('express')
var router = express.Router()
var aboutcard = require("./about_items/card_items.json")
var aboutext = require("./about_items/text_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

let Card =()=> {
  return(aboutcard)
}

let Text =()=> {
  return(aboutext)
}

let Content=()=>{
  return JSON.parse('{"Card":'+JSON.stringify(Card())+',"Text":'+JSON.stringify(Text())+"}")
}


let AboutPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.AboutPage = (req,res)=>{
      res.json(AboutPageJson())
    }
