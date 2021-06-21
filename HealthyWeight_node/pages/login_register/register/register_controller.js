var express = require('express')
var router = express.Router();
var registerDb =require("./register_db.js")

// define the Register page route

module.exports.RegisterPage = async (req,res)=>{
      res.json(await registerDb.RegisterPageJson())
    }


