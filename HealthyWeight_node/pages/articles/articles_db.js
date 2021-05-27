var express = require('express')
var router = express.Router()
var bestarticles = require('./articles_items/best_items.json')
var newarticles = require('./articles_items/new_items.json')
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')

// define the articles page route

let Best =async()=> {
    return await generalDb.DbQuery("SELECT * , DATE_FORMAT( time , '%M %d %Y') AS time  FROM articles_items WHERE category='best'")
  // return(bestarticles)
}

let New =async()=> {
    return await generalDb.DbQuery("SELECT * , DATE_FORMAT( time , '%M %d %Y') AS time  FROM articles_items WHERE category='new'")
  // return(newarticles)
}

let Content=async()=>{
  return JSON.parse('{"Best":'+JSON.stringify(await Best())+',"New":'+JSON.stringify(await New())+"}")
}


module.exports.ArticlesPageJson= async()=>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
