var express = require('express');
var router = express.Router();
var generalDb = require('../../General_DB.js')


router.get('/register', function(req, res, next) { 
res.render('users'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
var full_Name = req.body.full_name;
var email = req.body.email;
var age = req.body.age;
var height= req.body.height;
var weight= req.body.weight;
var password= req.body.password;
var confirm_password= req.body.confirm_password;
 
  // insert user data into users table
  var sql = "INSERT INTO users id ,full_name , email , age , height , "+
            " weight , password , confirm_password) VALUES (NULL, '"+user.full_name+"',"+
            " '"+user.email+"', NULL, '"+user.age+"', '"+user.height+"', '"+user.weight+"',"+
            "'"+user.password+"','"+user.confirm_password+"' , NULL , NULL);";
  generalDb.DbQuery(sql,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/users/register');  // redirect to user form page after inserting the data
}); 
module.exports = router;