var express = require('express')
var router = express.Router();
var psychoDb =require("./psycho_db.js")


// define the psycho page route

module.exports.PsychoPage = (req,res)=>{
      res.json(psychoDb.PsychoPageJson())
    }
