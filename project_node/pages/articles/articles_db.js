var express = require('express')
var router = express.Router()
var bestarticles = require('./articles_items/best_items.json')
var newarticles = require('./articles_items/new_items.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')

// define the articles page route

let Best =()=> {
  return(bestarticles)
}

let New =()=> {
  return(newarticles)
}

let Content=()=>{
  return JSON.parse('{"Best":'+JSON.stringify(Best())+',"New":'+JSON.stringify(New())+"}")
}


let ArticlesPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.ArticlesPage = (req,res)=>{
      res.json(ArticlesPageJson())
    }
