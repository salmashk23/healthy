var express = require('express');
var userDb = require('../users_db.js');


let HandleUserData = async (user) =>{
    let Query = await userDb.GetUserData('email', user.email);
    if (Query.length >0 ){
        if (user.password != Query[0].password ){
            return ({
                msg : "Password Incorrect!",
                status : "NOT_LOGGED_IN",
                user: {
                    email : user.email,
                    password : user.password
                }
            });
        }
        else
            //return("OK")
            return ({
                msg : "Welcome Back",
                status : "NOT_LOGGED_IN",
                user: [{
                    email : user.email,
                    password : user.password
                }]
            });
            //redirect to profile page
            // (req, res) => { 
            //     res.redirect('/profile');
            // }  
    }
    else
        return (`User Not Found`)
}


module.exports.LoginFormHandler = async (req,res)=>{
    console.log(req.body.data);
    let str= await HandleUserData(req.body.data);
    res.send(JSON.stringify(str))
  }
  


// module.exports.LoginJson = async (req,res)=>{
//     res.json(await loginDb.LoginJson());
// }

