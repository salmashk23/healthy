var express = require('express')
var router = express.Router();
var dietDb =require("./diet_programs_db.js")

// define the diet programs page route

module.exports.DietPage = (req,res)=>{
      res.json(dietDb.DietPageJson())
    }
