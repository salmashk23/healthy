var express = require('express')
var router = express.Router();
var registerDb =require("./register_db.js")

// define the Register page route

module.exports.RegisterPage = (req,res)=>{
      res.json(registerDb.RegisterPageJson())
    }



// router.post('/register',(req,res)=>{})

// module.exports = router
