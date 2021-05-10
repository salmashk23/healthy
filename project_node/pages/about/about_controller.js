var express = require('express')
var aboutDb = require("./about_db.js")

// define the about page route

module.exports.AboutPage = (req,res)=>{
      res.json(aboutDb.AboutPageJson())
    }
