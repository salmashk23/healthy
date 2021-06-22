var express = require('express')
var istoryDb =require("./istory_db.js")


// define the istory page route
module.exports.IstoryPage = async (req,res)=>{
      res.json(await istoryDb.IstoryPageJson(req))
    }
