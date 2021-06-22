const express = require('express');
const PORT = 3002;
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

const home = require('./pages/home/home_controller.js');
const about = require('./pages/about/about_controller.js');
const dietprograms = require('./pages/diet_programs/diet_programs_controller.js');
const fitnessprograms = require('./pages/fitness_programs/fitness_programs_controller.js');
const articles = require('./pages/articles/articles_controller.js');
const contactus = require('./pages/contact_us/contact_us_controller.js');
const istory = require('./pages/istory/istory_controller.js');
const register = require('./pages/login_register/register/register_controller.js');
const registerForm = require('./general/users/register/RegisterForm_controller.js');
const login = require('./pages/login_register/login/login_controller.js');
const generalDb = require('./General_DB.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// GET method route
const jsonParser = express.json()

// Init the session
app.use(session({
  secret: 'keyboard healthy',
  cookie: {
    maxAge: 6000000
   },
}))

app.use(express.static(__dirname + '/userid'));
app.use(express.static(__dirname + '/name'));
app.use(express.static(__dirname + '/email'));
app.use(express.static(__dirname + '/gender'));
app.use(express.static(__dirname + '/age'));
app.use(express.static(__dirname + '/height'));
app.use(express.static(__dirname + '/weight'));
app.use(express.static(__dirname + '/picture_url'));


app.post('/login_page', jsonParser, async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    if (req.session.userid) {
      return res.send({ res: "You Are Already Logged In Please Logout" });
    } else {
      result = await generalDb.DbQuery(`SELECT * FROM \`users\` WHERE \`email\`='${email}' and \`password\`='${password}'`);
      if (result.length !== 0) {
        req.session.userid = result[0]['iduser'];
        req.session.name = result[0]['name'];
        req.session.email = result[0]['email'];
        req.session.age = result[0]['age'];
        req.session.password = result[0]['password'];
        req.session.picture_url = result[0]['picture_url'];
        return res.send({ res: true })
      }
      return res.send({ res: "Incorrect email or password" });
    }
  } else {
    return res.send({ res: "You need to enter the email and password" });
  }
});
app.get('/login_page', login.LoginPage)
// app.post('/users/loginForm', loginForm.LoginFormHandler)



app.get('/istory', istory.IstoryPage)
// app.post('/istoryForm', istory.PostFormHandler)


app.post('/istory', jsonParser, async (req, res) => {
  if (!req.session || !req.session.userid) {
    res.json({"error": "Something went wrong"});
  }
  itemToAdd = req.body;
  result = await generalDb.DbQuery(`INSERT INTO \`istory_users_posts\` VALUES('${itemToAdd.post}', NOW(), NULL, ${req.session.userid})`);
  res.json({ "id": result.insertId });
});


app.get('/home', home.HomePage)
app.get('/about(us)?', about.AboutPage)
app.get('/diet(programs)?', dietprograms.DietPage)
app.get('/fitness(programs)?', fitnessprograms.FitnessPage)
app.get('/contact(us)?', contactus.ContactPage)
app.get('/article(s)?', articles.ArticlesPage)


app.get('/register_page', register.RegisterPage)
app.post('/register_page',registerForm.RegisterFormHandler)

app.get('/logout', (req, res) => {
  if (req.session.userid) {
    req.session.destroy((err) => {
      if (err) {
        return res.send(err);
      }
      return res.send({ res: true });
    });
  } else {
    return res.send({ res: false });
  }
});

app.listen(PORT, () => {
  console.log(`Healthy Weight App on port ${PORT}!`)
});