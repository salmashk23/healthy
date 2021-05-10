var express = require('express')
var router = express.Router();
var fitnessDb =require("./fitness_programs_db.js")

// define the fitness programs page route
module.exports.FitnessPage = (req,res)=>{
      res.json( fitnessDb.FitnessPageJson())
    }
