var express = require('express')
var router = express.Router();
var articlesDb =require("./articles_db.js")

router.get('/article(s)?', articlesDb.ArticlesPage)


module.exports = router
