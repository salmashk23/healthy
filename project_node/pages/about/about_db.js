var aboutcard = require("./about_items/card_items.json")
var aboutext = require("./about_items/text_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')


let Card =()=> {
  return(aboutcard)
}

let Text =()=> {
  return(aboutext)
}

let Content=()=>{
  return JSON.parse('{"Card":'+JSON.stringify(Card())+',"Text":'+JSON.stringify(Text())+"}")
}


module.exports.AboutPageJson=()=>{
    return JSON.parse('{"Header":'+JSON.stringify(header.Header())+',"Content":'+JSON.stringify(Content())+',"Footer":'+ footer.Footer() +"}")
}
