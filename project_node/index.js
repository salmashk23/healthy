const express = require('express');
const PORT = 3002;
const app = express();


var home = require('./pages/home/home_controller.js');
var about = require('./pages/about/about_controller.js');
var dietprograms = require('./pages/diet_programs/diet_programs_controller.js');
var fitnessprograms = require('./pages/fitness_programs/fitness_programs_controller.js');
var articles = require('./pages/articles/articles_controller.js');
var contactus = require('./pages/contact_us/contact_us_controller.js');
var istory = require('./pages/istory/istory_controller.js');
var psycho = require('./pages/psycho/psycho_controller.js');
var register = require('./pages/login_register/register/register_controller.js');
var login = require('./pages/login_register/login/login_controller.js');


app.get('/home', home)
app.get('/about(us)?', about)
app.get('/diet(programs)?', dietprograms)
app.get('/fitness(programs)?', fitnessprograms)
app.get('/contact(us)?', contactus)
app.get('/article(s)?', articles)
app.get('/istory', istory)
app.get('/login', login)
app.get('/register', register)
app.get('/psych(o)?', psycho)


app.listen(PORT, () => {
  console.log(`Healthy Weight App on port ${PORT}!`)
});
