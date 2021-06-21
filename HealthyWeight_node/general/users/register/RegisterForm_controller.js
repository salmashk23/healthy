var express = require('express');
var registerDb = require('./RegisterForm_db.js');
var bcrypt = require('bcrypt')
var userDb = require('../users_db.js');


let HandleUserData = async (user) =>{
  let Query = await userDb.GetUserData('email', user.email);
  if (Query.length> 0)
    return ('Email is Already Taken!');
      
  else
    userDb.InsertData(user);
    return (`Welcome ${user.name} To Healthy Weight Web ... The Registeration Process Has Been Successfully Completed. Please Sign In.`);
}


module.exports.RegisterFormHandler = async (req,res)=>{
  console.log(req.body.data);
  let str= await HandleUserData(req.body.data);
  res.send(JSON.stringify(str))
}


// module.exports.RegisterJson = async (req,res)=>{
//   res.json(await registerDb.RegisterJson());
// }
