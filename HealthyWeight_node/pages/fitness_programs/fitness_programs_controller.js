var express = require('express')
var router = express.Router();
var fitnessDb =require("./fitness_programs_db.js")
var generalDb = require('../../General_DB.js')

// define the fitness programs page route
module.exports.FitnessPage =async (req,res)=>{
      res.json(await fitnessDb.FitnessPageJson())
    }
