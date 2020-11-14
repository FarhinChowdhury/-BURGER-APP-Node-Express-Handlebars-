const mysql = require( 'mysql' );


var connection;
if(process.env.JAWSDB_URL){
    connection= mysql.createConnection(procexx.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'burgers_db'
    })
}


// at top INIT DB connection
// const db = new Database({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "rootroot",
//     database: "burgers_db"
//   });
connection.connect();
module.exports = connection;