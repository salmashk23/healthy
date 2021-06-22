var express = require('express')
var router = express.Router();
var dietDb =require("./diet_programs_db.js")

// define the diet programs page route

module.exports.DietPage = async (req,res)=>{
      res.json(await dietDb.DietPageJson(req))
    }
