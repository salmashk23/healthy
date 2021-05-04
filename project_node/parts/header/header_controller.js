var express = require('express')
var router = express.Router();
var menuitems = require('../../general/menu/menu_items.json')

// define the header route

// let Menu =()=> {
//   return(menuitems)
// }

module.exports.Header = (req,res) => {
    return (menuitems)
}
