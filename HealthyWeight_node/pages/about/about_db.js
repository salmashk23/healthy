// var aboutcard = require("./about_items/card_items.json")
// var aboutext = require("./about_items/text_items.json")
var footer = require('../../parts/footer/footer_controller.js')
var header = require('../../parts/header/header_controller.js')
var generalDb = require('../../General_DB.js')


let Card= async ()=>{
    return await generalDb.DbQuery("SELECT * FROM about_card_items")
     // return(aboutcard)
}

let Text= async ()=>{
    return await generalDb.DbQuery("SELECT * FROM about_text_items")
     // return(aboutext)
}


let Content = async () => {
  return JSON.parse('{"Card":'+JSON.stringify(await Card())+',"Text":'+JSON.stringify(await Text())+"}")
}


module.exports.AboutPageJson= async () =>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(),
        "Footer": await footer.Footer()
})}
