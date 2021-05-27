var express = require('express')
var router = express.Router();
// var menuitems = require('../../general/menu/menu_items.json')
var footerDb= require("./footer_db.js")
var generalDb = require('../../General_DB.js')

// define the header route

module.exports.Footer = async () => {
    return (await footerDb.FooterJson())
}
