var express = require('express')
var router = express.Router();
var dietDb =require("./diet_programs_db.js")

// define the diet programs page route

router.get('/diet(programs)?', dietDb.DietPage)


module.exports = router
