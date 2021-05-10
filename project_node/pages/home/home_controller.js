var express = require('express')
var router = express.Router();
var homeDb =require("./home_db.js")

// define the home page route

module.exports.HomePage = (req,res)=>{
      res.json(homeDb.HomePageJson())
    }
