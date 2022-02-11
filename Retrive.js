let mysql = require('mysql');
let config = require('./conn.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM student`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end(); 
