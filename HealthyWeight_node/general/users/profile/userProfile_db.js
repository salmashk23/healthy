var footer = require('../../../parts/footer/footer_controller.js')
var header = require('../../../parts/header/header_controller.js')
var userDb = require('../users_db.js');


let  Content= async (email) => {
    if(email)
        return ({
            "Users": await userDb.GetUserDataByEmail(email)
        });
};

module.exports.ProfilePageJson= async () =>{
    return ({
        "Header": await header.Header(),
        "Content":await Content(email),
        "Footer": await footer.Footer()
})}