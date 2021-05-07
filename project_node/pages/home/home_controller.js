var express = require('express')
var router = express.Router();
var homeDb =require("./home_db.js")

// define the home page route

router.get('/home', homeDb.HomePage)


module.exports = router
