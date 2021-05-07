var express = require('express')
var router = express.Router();
var contactDb =require("./contact_us_db.js")

// define the contactus page route

router.get('/contact(us)?', contactDb.ContactPage)

module.exports = router
