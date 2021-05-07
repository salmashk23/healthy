var express = require('express')
var router = express.Router();
var istoryDb =require("./istory_db.js")

// define the istory page route

router.get('/istory', istoryDb.IstoryPage)


module.exports = router
