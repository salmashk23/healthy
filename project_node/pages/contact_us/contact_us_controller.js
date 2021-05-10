var express = require('express')
var router = express.Router();
var contactDb =require("./contact_us_db.js")

// define the contactus page route
module.exports.ContactPage = (req,res)=>{
      res.json(contactDb.ContactPageJson())
    }
