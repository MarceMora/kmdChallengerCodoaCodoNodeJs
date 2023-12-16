const mysql = require("mysql2");

const conn = mysql.createPool({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "funko",
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