var express = require('express')
var router = express.Router()
var register = require("./register_items/register_items.json")
var quest = require("./register_items/quest_items.json")
var body = require("./register_items/body_items.json")
var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')


let Register=()=>{
  return (register)
}

let Quest=()=>{
  return (quest)
}

let Body=()=>{
  return (quest)
}


let Content=()=>{
  return  JSON.parse('{"Register":'+JSON.stringify(Register())+',"Quest":'+JSON.stringify(Quest())+',"Body":'+JSON.stringify(Body())+"}")
}




let RegisterPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.RegisterPage = (req,res)=>{
      res.json(RegisterPageJson())
    }
