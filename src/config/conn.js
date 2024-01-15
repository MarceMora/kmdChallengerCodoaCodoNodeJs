const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createPool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBSCHEMA,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0

});

conn.getConnection((err, conn)=> {
    if (err) {
        console.log("Error de coneccion a la Base de Datos: " + err);
    } else {
        console.log("Se ha conectado con exito a la Base de Datos");
        conn.release();
    }

}),

module.exports = {
    conn: conn.promise()
}