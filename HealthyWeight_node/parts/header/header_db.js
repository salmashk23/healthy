var express = require('express')
var router = express.Router();
// var menuitems = require('../../general/menu/menu_items.json')
var generalDb = require('../../General_DB.js')


let MenuItems = async () => {
    return await generalDb.DbQuery("SELECT * FROM menu_items INNER JOIN menu_list ON menu_list.id=menu_items.menu_id AND name='header menu'")
}

module.exports.HeaderJson = async () => {
    return JSON.parse('{"MenuItems":'+JSON.stringify(await MenuItems())+"}")
}
