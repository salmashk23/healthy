var express = require('express')
var router = express.Router();
var registerDb =require("./register_db.js")

// define the Register page route

router.get('/register', registerDb.RegisterPage)

router.post('/register',(req,res)=>{})


module.exports = router
