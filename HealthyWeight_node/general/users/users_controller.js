var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var register = require('../../pages/login_register/register/register_controller.js');
var generalDb = require('../../General_DB.js')



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


const ifNotLoggedin = (req, res, next) => {
    if(!req.session.userID){
        return res.redirect('/login');
    }
    next();
}