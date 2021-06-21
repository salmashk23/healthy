var express = require('express');
var router = express.Router();
var jsonParser = express.json();
var generalDb = require('../../../General_DB.js');

router.post('/loginForm', jsonParser, async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      if (req.session.user_id) {
        return res.send({ res: "You are already logged in please logout" });
      } else {
        result = await generalDb.DbQuery(`SELECT * FROM \`user\` WHERE \`email\`='${email}' and \`password\`='${password}'`);
        if (result.length !== 0) {
          req.session.user_id = result[0]['user_id'];
          req.session.full_name = result[0]['full_name'];
          req.session.email = result[0]['email'];
          req.session.gender = result[0]['gender'];
          req.session.age = result[0]['age'];
          req.session.height = result[0]['height'];
          req.session.weight = result[0]['weight'];
          return res.send({ res: true })
        }
        return res.send({ res: "Incorrect email or password" });
      }
    } else {
      return res.send({ res: "You need to enter the email and password" });
    }
  });


  module.exports = router;
