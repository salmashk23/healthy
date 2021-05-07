var express = require('express')
var router = express.Router();
var psychoDb =require("./psycho_db.js")


// define the psycho page route

router.get('/psych(o)?', psychoDb.PsychoPage)


module.exports = router
