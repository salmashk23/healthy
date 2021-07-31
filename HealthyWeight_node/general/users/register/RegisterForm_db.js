var express = require('express');
var router = express.Router();
var jsonParser = express.json();
var generalDb = require('../../../General_DB.js');

function checkStringForNumbers(input) {
    let str = String(input);
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str.charAt(i))) {
        return true;
      }
    }
}
  
router.post('/registerForm', jsonParser, async (req, res) => {
    itemToAdd = req.body;
    if (!itemToAdd.name || !itemToAdd.email || !itemToAdd.gender || !itemToAdd.age || !itemToAdd.height ||  !itemToAdd.weight || !itemToAdd.password || !itemToAdd.confirm_password) {
      return res.send({ res: "You need to fill in the whole form" });
    } else if (checkStringForNumbers(itemToAdd.name)) {
      return res.send({ res: "Name can't contain numbers!" });
    }
    checkEmail = await generalDb.DbQuery(`SELECT \`iduser\` FROM \`users\` WHERE \`email\`='${itemToAdd.email}'`);
    if (checkEmail.length !== 0) {
      return res.send({ res: "Email is already in use!" });
    }
    result = await generalDb.DbQuery(`INSERT INTO \`users\` VALUES(NULL, '${itemToAdd.name}', '${itemToAdd.email}',  '${itemToAdd.gender}' , '${itemToAdd.age}',  '${itemToAdd.height}',  '${itemToAdd.weight}',  '${itemToAdd.password}', '${itemToAdd.confirm_password}')`);
    return res.json({ "res": "Your account has been registered successfully" });
  });
  
module.exports = router;