var express = require('express')
var router = express.Router();
// var menuitems = require('../../general/menu/menu_items.json')
var generalDb = require('../../General_DB.js')


let MenuItems = async () => {
    return await generalDb.DbQuery("SELECT * FROM menu_items where menu_id=1")
}

module.exports.HeaderJson = async () => {
    return JSON.parse('{"MenuItems":'+JSON.stringify(await MenuItems())+"}")
}
