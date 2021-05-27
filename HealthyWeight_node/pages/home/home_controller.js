var express = require('express')
var router = express.Router();
var homeDb =require("./home_db.js")

// define the home page route

module.exports.HomePage = async (req,res)=>{
      res.json(await homeDb.HomePageJson())
    }
