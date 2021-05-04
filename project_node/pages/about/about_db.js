// const databases = require('./about_card_item/card_items.json');
//
// // print all databases
// databases.forEach(db => {
//     console.log(`${db.image}: ${db.title}: ${db.text}`);
// });

var express = require('express')
var router = express.Router()
router.get('/card_items', function (req, res) {
  return res.json(card_items);
});

module.exports = router
