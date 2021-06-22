var express = require('express')
var router = express.Router();
var loginDb =require("./login_db.js")


// define the login page route

module.exports.LoginPage = async (req,res)=>{
      res.json(await loginDb.LoginPageJson(req))
    }

// router.post('/login', (req, res) => {
//   // Insert Login Code Here
//   let email = req.body.email;
//   let password = req.body.password;
//   res.send(`E-mail: ${email} Password: ${password}`);
// });
//
// module.exports = router
