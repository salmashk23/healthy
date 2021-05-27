var express = require('express')
var aboutDb = require("./about_db.js")

// define the about page route

module.exports.AboutPage = async (req,res)=>{
      res.json(await aboutDb.AboutPageJson())
    }
