var express = require('express')
var userProfile = require ("./userProfile_db")

// define the profile page route

module.exports.ProfilePage = async (req, res) => {
    const email = req.query.User;
    res.json (await userProfile.ProfilePageJson(email));
}