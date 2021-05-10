var express = require('express')
var router = express.Router();
var istoryDb =require("./istory_db.js")

// define the istory page route

module.exports.IstoryPage = (req,res)=>{
      res.json(istoryDb.IstoryPageJson())
    }
