var express = require('express')
var router = express.Router();
var aboutdb =require("./about_db.js")

// define the about page route

router.get('/about', aboutdb.AboutPage)


module.exports = router
