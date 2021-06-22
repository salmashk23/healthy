var express = require('express')
var userProfile = require ("./userProfile_db")
var userDb = require('../users_db.js');

// define the profile page route

// let HandleUserData = async (user,res) =>{
//     let Query = await userDb.GetUserData('id', user.id);
//     if (Query.length !== 1) {
//         return res.redirect('/logout');
//     }

//     res.render('profile', {
//         user: Query[0]
//     });
// }

// module.exports.ProfileFormHandler = async (req,res)=>{
//     console.log(req.body);
//     let str= await HandleUserData(req.body.data);
//     res.send(JSON.stringify(str))
//   }


module.exports.ProfilePage = async (req, res) => {
    const email = req.query.User;
     res.json (await userProfile.ProfilePageJson(email));
 }