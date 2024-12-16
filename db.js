require('dotenv').config();
const mysql = require('mysql2');

// Hardcoded credentials HUSK create dotenv file to hide credentials


const con = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password, 
  database: process.env.database 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;