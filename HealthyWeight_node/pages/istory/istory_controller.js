var express = require('express')
var router = express.Router();
var istoryDb =require("./istory_db.js")


module.exports.PostFormHandler = async (req,res)=>{
  console.log(req.body);
  let str= await istoryDb.InsertPost(req.body);
  res.send(JSON.stringify(str))
}



// define the istory page route
module.exports.IstoryPage = async (req,res)=>{
      res.json(await istoryDb.IstoryPageJson())
    }
