var express = require('express')
var router = express.Router();
var footericon = require('../../parts/footer/footer_items/footer_icons.json')
var footermenu = require('../../parts/footer/footer_items/footer_menu_item.json')
var generalDb = require('../../General_DB.js')


let Icons = async()=> {
    return await generalDb.DbQuery("SELECT * FROM menu_items where menu_id=2")
  // return(footericon)
}

let MenuFooter = async()=> {
    return await generalDb.DbQuery("SELECT * FROM menu_items where menu_id=3")
  // return(footermenu)
}

module.exports.FooterJson = async() => {
    return JSON.parse('{"Icons":'+JSON.stringify(await Icons())+',"MenuFooter":'+JSON.stringify(await MenuFooter())+"}")
}
