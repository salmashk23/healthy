var express = require('express');
var router = express.Router();
var menuitems = require("./menu_items/menu_items.json")


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the login page route
router.get('/', function (req, res) {
   res.json(menuitems);
});

module.exports = router
