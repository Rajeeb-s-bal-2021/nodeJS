const mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'My Database',
    user     : 'root',
    port     : '3306',
    password : 'abit@1998',
    database : 'abit'
});


connection.connect((err) => {
    if(!err)
        console.log('Database is geconnect!');
    else
    console.log('Connected')
        //console.log('Database connectie niet gelukt!  : '+ JSON.stringify(err, undefined,2));
});
