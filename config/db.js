require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST_NAME,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password:process.env.DB_PWD
});

// if(pool){
//   console.log("ok");
// }else{
//   console.log("error");
// }
// console.log(pool.getConnect());
pool.getConnection((err)=>{
  if(err){
    console.log("Database Not found.");
  }else{
    console.log("Database Connected")
  }
})


module.exports = pool.promise();
