const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
    host     : 'database-1.csyotcvoz5ks.us-west-2.rds.amazonaws.com',
    user     : 'admin',
    port     : '3306',
    password : 'abit1998',
    database : 'abit'
});
app.get('/abits' , (req, res) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
db.query("select * from student",(err,res)=>{
    return console.log(res);
})


app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1>');
});

app.listen(5001, () =>{
    console.log('Server start......');
});