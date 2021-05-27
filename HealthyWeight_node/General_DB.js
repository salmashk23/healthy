var mysql = require('mysql');
var util = require('util');
var config = require('./config/config.json')


connection = mysql.createConnection({
      host: config.phpMyAdmin.host,
      user: config.phpMyAdmin.user,
      password: config.phpMyAdmin.password,
      database: config.phpMyAdmin.database
 });

connection.connect(function(err) {
    if (err) {throw err};
    console.log(" Database Connected!");
});


var DbQuery= util.promisify(connection.query).bind(connection);

module.exports = { DbQuery };
