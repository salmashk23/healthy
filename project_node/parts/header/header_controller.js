var express = require('express')
var router = express.Router();
var menuitems = require('../../general/menu/menu_items.json')

// define the header route

module.exports.Header = (req,res) => {
    return (menuitems)
}
