var express = require('express')
var router = express.Router()
var register = require("./register_items.json")
var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


let Content=()=>{
  return (register)
}


let RegisterPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.RegisterPage = (req,res)=>{
      res.json(RegisterPageJson())
    }
