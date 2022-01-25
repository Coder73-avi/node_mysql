require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST_NAME,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password:process.env.DB_PWD
});


module.exports = pool.promise();
