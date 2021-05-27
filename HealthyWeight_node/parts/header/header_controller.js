var express = require('express')
var router = express.Router();
var headerDb = require('./header_db.js')
// var menuitems = require('../../general/menu/menu_items.json')

// define the header route

module.exports.Header =() => {
    return (headerDb.HeaderJson())
}
