var express = require('express')
var router = express.Router();
var footericon = require('../../parts/footer/footer_items/footer_icons.json')
var footermenu = require('../../parts/footer/footer_items/footer_menu_item.json')

// define the footer route

let Icons =()=> {
  return(footericon)
}

let MenuFooter =()=> {
  return(footermenu)
}

module.exports.Footer = (req,res) => {
    return ('{"Icons":'+JSON.stringify(Icons())+',"MenuFooter":'+JSON.stringify(MenuFooter())+"}")
}
