var express = require('express')
var router = express.Router()
// var logreg = require('../../../../project_react/src/components/pages/login_register/login_page.js')


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the login page route
router.get('/', function (req, res) {
  res.send("Articles page")
})

module.exports = router
