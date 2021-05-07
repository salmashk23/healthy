var express = require('express')
var router = express.Router();
var fitnessDb =require("./fitness_programs_db.js")

// define the fitness programs page route

router.get('/fitness(programs)?', fitnessDb.FitnessPage)


module.exports = router
