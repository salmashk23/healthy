var express = require('express')
var router = express.Router()
var dietitems = require('./diet_items/diet_items.json')
var recipeitems = require('./diet_items/recipe_items.json')
var recipeitem = require('./diet_items/recipe_item.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Diet =()=> {
  return( dietitems)
}

let Recipe =()=> {
  return(recipeitems)
}

let RecipeInfo =()=> {
  return(recipeitem)
}


let Content=()=>{
  return  JSON.parse('{"Diet":'+JSON.stringify(Diet())+',"Recipe":'+JSON.stringify(Recipe())+',"RecipeInfo":'+JSON.stringify(RecipeInfo())+"}")
}


let DietPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}


module.exports.DietPage = (req,res)=>{
      res.json(DietPageJson())
    }
