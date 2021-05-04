var express = require('express')
var router = express.Router()
var homeitems = require("./home_items/carousel_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


let Content=()=>{
  return (homeitems)
}


let HomePageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.HomePage = (req,res)=>{
      res.json(HomePageJson())
    }
