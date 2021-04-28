const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

var login = require('./general/users/login/login.js');
var about = require('./pages/about/about.js');
var articles = require('./pages/articles/articles.js');
var contactus = require('./pages/contact_us/contact_us.js');
var dietprograms = require('./pages/diet_programs/diet_programs.js');
var fitnessprograms = require('./pages/fitness_programs/fitness_programs.js');
var istory = require('./pages/istory/istory.js');

app.get('/', function (req, res) {
  res.send("Home page")
})

app.use('/login', login)
app.use('/about(us)?', about)
app.use('/articles', articles)
app.use('/contact(us)?', contactus)
app.use('/diet(programs)?', dietprograms)
app.use('/fitness(programs)?', fitnessprograms)
app.use('/articles', articles)
app.use('/istory', istory)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});
